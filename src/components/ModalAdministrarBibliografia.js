import { addDoc, collection, deleteDoc, updateDoc } from "@firebase/firestore";
import React, { useState } from "react";
import { useUser } from "reactfire";
import { Formik } from "formik";
import "../css/ModalAdminStyles.css";
import {
  getCountBibliography,
  getDocBibliography,
  getEstadosNivs,
} from "../server/api";
import { db } from "../server/firebaseConfig";

export const ModalAdministrarBibliografia = ({ modalId, listCards }) => {
  const defaultFormValues = {
    id: -1,
    tituloReferencia: "",
    temas: "",
    autor_NombrePagina: "",
    tipo: "",
    customTipo: "",
    link: "",
    lastUser: "",
  };
  const [formValues, setFormValues] = useState(defaultFormValues);
  const [action, setAction] = useState("");
  const [disableModifyButtons, setDisableModifyButtons] = useState(true);
  const [message, setMessage] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");
  const { data: user } = useUser();

  const typesForBibliographicResources = [
    "Página Web",
    "PDF",
    "Imágen",
    "Artículo científico",
  ];

  const formatText = (text) => {
    let newText = text.trim();
    newText = newText.charAt(0).toUpperCase() + newText.slice(1);
    return newText;
  };

  const compareStringsOnArr = (arr, str) => {
    let result = false;
    const Levenshtein = (a, b) => {
      let n = a.length;
      let m = b.length;
      let d = [];
      if (n == 0) return m;
      if (m == 0) return n;
      for (let i = 0; i <= n; i++) (d[i] = [])[0] = i;
      for (let j = 0; j <= m; j++) d[0][j] = j;
      for (let i = 1, I = 0; i <= n; i++, I++)
        for (let j = 1, J = 0; j <= m; j++, J++)
          if (b[J] == a[I]) d[i][j] = d[I][J];
          else d[i][j] = Math.min(d[I][j], d[i][J], d[I][J]) + 1;
      return d[n][m];
    };

    if (str.length > 3) {
      arr.forEach((text) => {
        if (
          Levenshtein(text.toLowerCase().trim(), str.toLowerCase().trim()) <= 3
        ) {
          result = true;
        }
      });
    } else {
      result = arr.includes(str);
    }
    return result;
  };

  const showMessage = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage("");
    }, 6000);
  };

  const handleUpdate = async () => {
    const lastId = await getCountBibliography();
    if (formValues.id < 1 || formValues.id > lastId) {
      alert(
        "No se puede actualizar un recurso bibliográfico sin identificarlo primero"
      );
      return;
    } else {
      if (
        !compareStringsOnArr(
          listCards
            .map((cardBibliography) => cardBibliography.tituloReferencia)
            .filter((cardBibliography) => cardBibliography !== currentTitle),
          formValues.tituloReferencia
        )
      ) {
        let userName = "";
        const users = await getEstadosNivs(user.uid);
        users.forEach((user) => {
          userName = user.data().name;
        });
        setFormValues({ ...formValues, lastUser: userName });
        const listDocs = await getDocBibliography(formValues.id);
        listDocs.forEach((doc) => {
          updateDoc(doc.ref, {
            id: formValues.id,
            tituloReferencia: formValues.tituloReferencia,
            temas: formValues.temas,
            autor_NombrePagina: formValues.autor_NombrePagina,
            tipo:
              formValues.tipo === "Otro"
                ? formValues.customTipo
                : formValues.tipo,
            link: formValues.link,
            lastUser: userName,
          });
        });
        // setCurrentTitle(formValues.tituloReferencia);
        setFormValues(defaultFormValues);
        setCurrentTitle("");
        setDisableModifyButtons(true);
        alert("Se actualizó el recurso bibliográfico seleccionado");
      } else {
        showMessage(
          "Ya existe un recurso bibliográfico con un título muy similar"
        );
      }
    }
  };

  const handleAdd = async () => {
    if (
      !compareStringsOnArr(
        listCards.map((cardBibliography) => cardBibliography.tituloReferencia),
        formValues.tituloReferencia
      )
    ) {
      let userName = "";
      const users = await getEstadosNivs(user.uid);
      users.forEach((user) => {
        userName = user.data().name;
      });
      const lastId = await getCountBibliography();
      setFormValues({ ...formValues, id: lastId + 1, lastUser: userName });
      addDoc(collection(db, "bibliografia"), {
        id: lastId + 1,
        tituloReferencia: formValues.tituloReferencia,
        temas: formValues.temas,
        autor_NombrePagina: formValues.autor_NombrePagina,
        tipo:
          formValues.tipo === "Otro" ? formValues.customTipo : formValues.tipo,
        link: formValues.link,
        lastUser: userName,
      });
      // setDisableModifyButtons(false);
      // setCurrentTitle(formValues.tituloReferencia);
      setFormValues(defaultFormValues);
      setCurrentTitle("");
      setDisableModifyButtons(true);
      alert("Se agregó el recurso bibliográfico");
    } else {
      showMessage(
        "Ya existe un recurso bibliográfico con un título muy similar"
      );
    }
  };

  const handleDelete = async () => {
    const lastId = await getCountBibliography();
    if (formValues.id < 1 || formValues.id > lastId) {
      alert(
        "No se puede eliminar un recurso bibliográfico sin identificarlo primero"
      );
      return;
    } else {
      const listDocs = await getDocBibliography(formValues.id);
      listDocs.forEach((doc) => {
        deleteDoc(doc.ref);
      });
      setFormValues(defaultFormValues);
      setCurrentTitle("");
      setDisableModifyButtons(true);
      alert("Se eliminó el recurso bibliográfico seleccionado");
    }
  };

  const handleSubmit = () => {
    if (action === "update") {
      handleUpdate();
    } else if (action === "add") {
      handleAdd();
    } else if (action === "delete") {
      handleDelete();
    }
  };

  const validateWebUrl = (url) => {
    if (url) {
      var regExp =
        /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
      if (url.match(regExp)) {
        return true;
      }
    }
    return false;
  };

  const handleValidations = (values) => {
    let errors = {};
    // validaciones titulo referencia//
    if (!values.tituloReferencia) {
      errors.tituloReferencia = "El título es requerido";
    } else if (
      !/^[a-zA-ZÀ-ÿ0-9.:,?¿!¡()/\-+"' ]+$/.test(values.tituloReferencia)
    ) {
      errors.tituloReferencia = `El título solo puede contener letras, número, espacios o .:,?¿!¡()/+-'"`;
    }
    if (values.tituloReferencia.length > 70) {
      errors.tituloReferencia = "El título es muy largo";
    }
    if (new RegExp("^\\s+$").test(values.tituloReferencia)) {
      errors.tituloReferencia = "El título no puede tener solo espacios";
    }

    //validaciones temas//
    if (!values.temas) {
      errors.temas = "El tema es requerido";
    } else if (!/^[a-zA-ZÀ-ÿ0-9.:,?¿!¡()/\-+"' ]+$/.test(values.temas)) {
      errors.temas = `El tema solo puede contener letras, número, espacios o .:,?¿!¡()/+-'"`;
    }
    if (values.temas.length > 50) {
      errors.temas = "El tema es muy largo";
    }
    if (new RegExp("^\\s+$").test(values.temas)) {
      errors.temas = "El tema no puede tener solo espacios";
    }

    //validaciones autor o nombre de pagina//
    if (!values.autor_NombrePagina) {
      errors.autor_NombrePagina = "El autor/ nombre página es requerido";
    } else if (
      !/^[a-zA-ZÀ-ÿ0-9.:,?¿!¡()/\-+"' ]+$/.test(values.autor_NombrePagina)
    ) {
      errors.autor_NombrePagina = `El autor/nombre página solo puede contener letras, número, espacios o .:,?¿!¡()/+-'"`;
    }
    if (values.autor_NombrePagina.length > 40) {
      errors.autor_NombrePagina = "El autor/nombre de página es muy largo";
    }
    if (new RegExp("^\\s+$").test(values.autor_NombrePagina)) {
      errors.autor_NombrePagina =
        "El autor/nombre de página no puede tener solo espacios";
    }

    //validacion tipo//
    if (!values.tipo) {
      errors.tipo = "El tipo es requerido";
    }

    //validacion link//
    if (!values.link) {
      errors.link = "El link es requerido";
    } else if (!validateWebUrl(values.link)) {
      errors.link = "Debe ingresar un link de sitio válido";
    }
    return errors;
  };

  return (
    <Formik
      initialValues={formValues}
      onSubmit={handleSubmit}
      validate={handleValidations}
      enableReinitialize={true}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
      }) => (
        <form onSubmit={handleSubmit}>
          <div
            className="modal fade"
            id={modalId}
            tabIndex={-1}
            aria-hidden={true}
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header header-administration">
                  <h5 className="modal-title title-administration">
                    Actualizar contenido de bibliografía
                  </h5>
                  <button
                    type="button"
                    className="btn btn-dark"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    X
                  </button>
                </div>
                <div className="modal-body p-3 p-md-5 body-administration">
                  <div className="row">
                    <div className="dropdown d-grid gap-2 col-12 mb-3">
                      <button
                        type="button"
                        className="btn btn-primary dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded={false}
                      >
                        Selecciona un recurso bibliográfico
                      </button>
                      <ul className="dropdown-menu col-12 selector-administration">
                        {listCards.map((card) => (
                          <li key={card.id}>
                            <button
                              type="button"
                              className="dropdown-item"
                              onClick={() => {
                                setFormValues({
                                  id: card.id,
                                  tituloReferencia: card.tituloReferencia,
                                  temas: card.temas,
                                  autor_NombrePagina: card.autor_NombrePagina,
                                  tipo: typesForBibliographicResources.includes(
                                    card.tipo
                                  )
                                    ? card.tipo
                                    : "Otro",
                                  customTipo: card.tipo,
                                  link: card.link,
                                  lastUser: card.lastUser,
                                });
                                setCurrentTitle(card.tituloReferencia);
                                setDisableModifyButtons(false);
                              }}
                            >
                              {card.tituloReferencia}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="form-group row mb-3">
                    <label htmlFor="title-bibliography" className="form-label">
                      Título de la referencia bibliográfica:
                    </label>
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        id="title-bibliography"
                        name="tituloReferencia"
                        placeholder="Título de referencia"
                        value={values.tituloReferencia}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                    </div>
                    {touched.tituloReferencia && errors.tituloReferencia && (
                      <div className="text-danger">
                        {errors.tituloReferencia}
                      </div>
                    )}
                  </div>
                  <div className="form-group row mb-3">
                    <label htmlFor="topics-bibliography" className="form-label">
                      Temas:
                    </label>
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        id="topics-bibliography"
                        name="temas"
                        placeholder="Temas citados en el recurso bibliográfico"
                        value={values.temas}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                    </div>
                    {touched.temas && errors.temas && (
                      <div className="text-danger">{errors.temas}</div>
                    )}
                  </div>
                  <div className="form-group row mb-3">
                    <label htmlFor="author-bibliography" className="form-label">
                      Autor/Nombre de la página:
                    </label>
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        id="author-bibliography"
                        name="autor_NombrePagina"
                        placeholder="Autor/Nombre de la página"
                        value={values.autor_NombrePagina}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                    </div>
                    {touched.autor_NombrePagina &&
                      errors.autor_NombrePagina && (
                        <div className="text-danger">
                          {errors.autor_NombrePagina}
                        </div>
                      )}
                  </div>
                  <div className="form-group row mb-3">
                    <label htmlFor="type-bibliography" className="form-label">
                      Tipo:
                    </label>
                    <div className="col-7">
                      <select
                        id="type-bibliography"
                        name="tipo"
                        className="form-select"
                        value={values.tipo}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option value="">Selecciona el tipo del recurso</option>
                        {typesForBibliographicResources.map((item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ))}
                        <option value="Otro">Otro</option>
                      </select>
                    </div>
                    {values.tipo === "Otro" && (
                      <div className="col-5">
                        <input
                          type="text"
                          className="form-control"
                          id="type-bibliography"
                          name="customTipo"
                          placeholder="Otro tipo de recurso"
                          value={values.customTipo}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                        />
                      </div>
                    )}
                    {touched.tipo && errors.tipo && values.tipo !== "Otro" && (
                      <div className="text-danger">{errors.tipo}</div>
                    )}
                    {errors.customTipo && values.tipo === "Otro" && (
                      <div className="text-danger">{errors.customTipo}</div>
                    )}
                  </div>
                  <div className="form-group row mb-3">
                    <label htmlFor="link-bibliography" className="form-label">
                      Enlace:
                    </label>
                    <div className="col-12">
                      <input
                        type="url"
                        className="form-control"
                        id="link-bibliography"
                        name="link"
                        placeholder="Enlace del recurso bibliográfico"
                        value={values.link}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                    </div>
                    {touched.link && errors.link && (
                      <div className="text-danger">{errors.link}</div>
                    )}
                  </div>
                  <div className="form-group row mb-3">
                    <label htmlFor="user-bibliography" className="form-label">
                      Último usuario que actualizó el recurso bibliográfico:
                    </label>
                    <div className="col-12">
                      <h3>
                        <span className="badge bg-success">
                          {values.lastUser}
                        </span>
                      </h3>
                      <span className="text-muted">
                        Si actualiza o agrega un recurso bibliográfico, su
                        nombre se verá en este campo
                      </span>
                    </div>
                  </div>
                  <div className="form-group row justify-content-center mb-3">
                    <div className="col-auto text-danger">{message}</div>
                  </div>
                </div>
                <div className="modal-footer footer-administration">
                  <button
                    type="submit"
                    className="btn btn-success"
                    disabled={disableModifyButtons}
                    onClick={() => {
                      setFormValues({
                        ...values,
                        tituloReferencia: formatText(values.tituloReferencia),
                      });
                      setAction("update");
                    }}
                  >
                    Actualizar
                  </button>
                  <button
                    type="submit"
                    className="btn btn-secondary"
                    onClick={() => {
                      setFormValues({
                        ...values,
                        tituloReferencia: formatText(values.tituloReferencia),
                      });
                      setAction("add");
                    }}
                  >
                    Agregar
                  </button>
                  <button
                    type="submit"
                    className="btn btn-danger"
                    disabled={disableModifyButtons}
                    onClick={() => {
                      setFormValues(values);
                      setAction("delete");
                    }}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

//// (^._.^)ﾉ
