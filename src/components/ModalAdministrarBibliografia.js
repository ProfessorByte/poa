import { addDoc, collection, deleteDoc, updateDoc } from "@firebase/firestore";
import React, { useState } from "react";
import { useUser } from "reactfire";
import { ErrorMessage, Formik } from "formik";
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
    link: "",
    lastUser: "",
  };
  const [formValues, setFormValues] = useState(defaultFormValues);
  const [action, setAction] = useState("");
  const { data: user } = useUser();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleUpdate = async () => {
    const lastId = await getCountBibliography();
    if (formValues.id < 1 || formValues.id > lastId) {
      alert("No se puede actualizar una referencia sin identificarla primero");
      return;
    } else {
      let userName = "";
      const users = await getEstadosNivs(user.uid);
      users.forEach((user) => {
        userName = user.data().name;
      });
      setFormValues({ ...formValues, lastUser: userName });
      const listDocs = await getDocBibliography(formValues.id);
      listDocs.forEach((doc) => {
        updateDoc(doc.ref, formValues);
      });
    }
    alert("Se actualizó el recurso bibliográfico seleccionado");
  };

  const handleAdd = async () => {
    let userName = "";
    const users = await getEstadosNivs(user.uid);
    users.forEach((user) => {
      userName = user.data().name;
    });
    const lastId = await getCountBibliography();
    setFormValues({ ...formValues, id: lastId + 1, lastUser: userName });
    addDoc(collection(db, "bibliografia"), {
      ...formValues,
      id: lastId + 1,
      lastUser: userName,
    });
    alert("Se agregó el recurso bibliográfico");
  };

  const handleDelete = async () => {
    const lastId = await getCountBibliography();
    if (formValues.id < 1 || formValues.id > lastId) {
      alert("No se puede eliminar una referencia sin identificarla primero");
      return;
    } else {
      const listDocs = await getDocBibliography(formValues.id);
      listDocs.forEach((doc) => {
        deleteDoc(doc.ref);
      });
      setFormValues(defaultFormValues);
      alert("Se eliminó el recurso bibliográfico seleccionado");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
    if (!values.tituloReferencia) {
      errors.tituloReferencia = "El título es requerido";
    } else if (!/^[a-zA-ZÀ-ÿ\s.,!?]{1,80}$/.test(values.tituloReferencia)) {
      errors.tituloReferencia =
        "El título solo puede contener letras, espacios y .,!?";
    }

    if (!values.temas) {
      errors.temas = "El tema es requerido";
    } else if (!/^[a-zA-ZÀ-ÿ\s.,]{1,40}$/.test(values.temas)) {
      errors.temas = "El tema solo puede contener letras ,espacios y .,";
    }

    if (!values.autor_NombrePagina) {
      errors.autor_NombrePagina = "El autor/ nombre página es requerido";
    } else if (!/^[a-zA-ZÀ-ÿ\s.,]{1,40}$/.test(values.autor_NombrePagina)) {
      errors.autor_NombrePagina =
        "El autor/ nombre página solo puede contener letras y espacios";
    }

    if (!/^[a-zA-ZÀ-ÿ]{1,20}$/.test(values.tipo)) {
      errors.tipo = "El tipo solo puede contener letras";
    }

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
                                  tituloReferencia: card.tituloReferncia,
                                  temas: card.temas,
                                  autor_NombrePagina: card.autor_NombrePagina,
                                  tipo: card.tipo,
                                  link: card.link,
                                  lastUser: card.lastUser,
                                });
                              }}
                            >
                              {card.tituloReferncia}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="form-group row mb-3">
                    <label htmlFor="title-bibliography" className="form-label">
                      Título de referencia:
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
                        value={formValues.temas}
                        onChange={handleInputChange}
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
                        value={formValues.autor_NombrePagina}
                        onChange={handleInputChange}
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
                    <div className="col-8">
                      <select
                        name="type-bibliography"
                        id="type-bibliography"
                        className="form-select"
                        value={formValues.tipo}
                        onBlur={handleBlur}
                        onChange={(e) => {
                          setFormValues({
                            ...formValues,
                            tipo: e.target.value,
                          });
                        }}
                      >
                        <option value="">Selecciona el tipo del recurso</option>
                        <option value="PDF">PDF</option>
                        <option value="Página Web">Página Web</option>
                      </select>
                    </div>
                    <div className="col-4">
                      <input
                        type="text"
                        className="form-control"
                        id="type-bibliography"
                        name="tipo"
                        placeholder="Otro tipo de recurso"
                        value={formValues.tipo}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        required
                      />
                    </div>
                    {touched.tipo && errors.tipo && (
                      <div className="text-danger">{errors.tipo}</div>
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
                        value={formValues.link}
                        onChange={handleInputChange}
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
                      Último usuario que actualizó el recurso:
                    </label>
                    <div className="col-12">
                      <h3>
                        <span className="badge bg-success">
                          {formValues.lastUser}
                        </span>
                      </h3>
                      <span className="text-muted">
                        Si actualiza o agrega un recurso, su nombre se verá en
                        este campo
                      </span>
                    </div>
                  </div>
                </div>
                <div className="modal-footer footer-administration">
                  <button
                    type="submit"
                    className="btn btn-success"
                    onClick={() => {
                      setAction("update");
                    }}
                  >
                    Actualizar
                  </button>
                  <button
                    type="submit"
                    className="btn btn-secondary"
                    onClick={() => {
                      setAction("add");
                    }}
                  >
                    Agregar
                  </button>
                  <button
                    type="submit"
                    className="btn btn-danger"
                    onClick={() => {
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
