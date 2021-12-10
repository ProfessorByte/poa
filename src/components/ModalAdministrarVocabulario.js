import React, { useState } from "react";
import { Formik } from "formik";
import "../css/ModalAdminStyles.css";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../server/firebaseConfig";
import { getEstadosNivs } from "../server/api";

export const ModalAdministrarVocabulario = ({
  modalId,
  listVocabulario,
  currentUserId,
}) => {
  const defaultFormValues = {
    titleWord: "",
    descriptionWord: "",
    topicWord: "",
    lastUser: "",
    lastItemId: "",
  };
  const [formValues, setFormValues] = useState(defaultFormValues);
  const [action, setAction] = useState("");
  const [disableModifyButtons, setDisableModifyButtons] = useState(true);
  const [message, setMessage] = useState("");
  const [currentWord, setCurrentWord] = useState("");

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
    if (formValues.lastItemId) {
      if (
        !compareStringsOnArr(
          listVocabulario
            .map((word) => word.titulo)
            .filter((word) => word !== currentWord),
          formValues.titleWord
        )
      ) {
        let userName = "";
        const users = await getEstadosNivs(currentUserId);
        users.forEach((user) => {
          userName = user.data().name;
        });
        await updateDoc(doc(db, `vocabulario/${formValues.lastItemId}`), {
          titulo: formValues.titleWord,
          descripcion: formValues.descriptionWord,
          tema: formValues.topicWord,
          ultimoUsuario: userName,
        });
        setCurrentWord(formValues.titleWord);
        alert("Se modificó la palabra correctamente");
      } else {
        showMessage("Ya existe una palabra con ese nombre");
      }
    } else {
      alert("No se puede modificar una palabra sin identificarla primero");
    }
  };

  const handleAdd = async () => {
    if (
      !compareStringsOnArr(
        listVocabulario.map((word) => word.titulo),
        formValues.titleWord
      )
    ) {
      let userName = "";
      const users = await getEstadosNivs(currentUserId);
      users.forEach((user) => {
        userName = user.data().name;
      });
      const newDoc = await addDoc(collection(db, "vocabulario"), {
        id: listVocabulario.length + 1,
        titulo: formValues.titleWord,
        descripcion: formValues.descriptionWord,
        tema: formValues.topicWord,
        ultimoUsuario: userName,
      });
      setFormValues({ ...formValues, lastItemId: newDoc.id });
      setDisableModifyButtons(false);
      setCurrentWord(formValues.titleWord);
      alert("Se agregó la palabra correctamente");
    } else {
      showMessage("Ya existe una palabra con ese nombre");
    }
  };

  const handleDelete = async () => {
    if (formValues.lastItemId) {
      await deleteDoc(doc(db, `vocabulario/${formValues.lastItemId}`));
      setFormValues(defaultFormValues);
      setCurrentWord("");
      setDisableModifyButtons(true);
      alert("Se eliminó la palabra correctamente");
    } else {
      alert("No se puede eliminar una palabra sin identificarla primero");
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

  const handleValidations = (values) => {
    let errors = {};
    if (!values.titleWord) {
      errors.titleWord = "La palabra es requerida";
    } else if (!/^[a-zA-ZÀ-ÿ ]+$/.test(values.titleWord)) {
      errors.titleWord = "El palabra solo puede contener letras y espacios";
    }

    if (values.titleWord.length > 40) {
      errors.titleWord = "La palabra es muy larga";
    }

    if (new RegExp("^\\s+$").test(values.titleWord)) {
      errors.titleWord = "La palabra no puede tener solo espacios";
    }

    if (!values.descriptionWord) {
      errors.descriptionWord = "La descripción es requerida";
    }

    if (values.descriptionWord.length > 600) {
      errors.descriptionWord = "La descripción de la palabra es muy larga";
    }

    if (new RegExp("^\\s+$").test(values.descriptionWord)) {
      errors.descriptionWord = "La descripción no puede tener solo espacios";
    }

    if (!values.topicWord) {
      errors.topicWord = "El tema es requerido";
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
                    Actualizar contenido de vocabulario
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
                        Selecciona un palabra
                      </button>
                      <ul className="dropdown-menu col-12">
                        {listVocabulario.map((word, index) => (
                          <li key={index}>
                            <button
                              type="button"
                              className="dropdown-item"
                              onClick={() => {
                                setFormValues({
                                  titleWord: word.titulo,
                                  descriptionWord: word.descripcion,
                                  topicWord: word.tema,
                                  lastUser: word.ultimoUsuario,
                                  lastItemId: word.NO_ID_FIELD,
                                });
                                setCurrentWord(word.titulo);
                                setDisableModifyButtons(false);
                              }}
                            >
                              {word.titulo}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="form-group row mb-3">
                    <label htmlFor="inputWord" className="form-label">
                      Palabra:
                    </label>
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        id="inputWord"
                        name="titleWord"
                        placeholder="Escriba una palabra para el vocabulario"
                        value={values.titleWord}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                    </div>
                    {errors.titleWord && touched.titleWord && (
                      <div className="text-danger">{errors.titleWord}</div>
                    )}
                  </div>
                  <div className="form-group row mb-3">
                    <label htmlFor="wordDescription" className="form-label">
                      Descripción:
                    </label>
                    <div className="col-12">
                      <textarea
                        className="form-control"
                        id="wordDescription"
                        name="descriptionWord"
                        placeholder="Añade la descripción de la palabra aquí"
                        rows={6}
                        value={values.descriptionWord}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                    </div>
                    {errors.descriptionWord && touched.descriptionWord && (
                      <div className="text-danger">
                        {errors.descriptionWord}
                      </div>
                    )}
                  </div>
                  <div className="form-group row mb-3">
                    <label htmlFor="topicWord" className="form-label">
                      Tema:
                    </label>
                    <div className="col-12">
                      <select
                        id="topicWord"
                        name="topicWord"
                        className="form-select"
                        value={values.topicWord}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      >
                        <option value="">Selecciona el tema</option>
                        {listVocabulario
                          .map((word) => word.tema)
                          .filter(
                            (topic, index, self) =>
                              self.indexOf(topic) === index
                          )
                          .map((topic, index) => (
                            <option key={index} value={topic}>
                              {topic}
                            </option>
                          ))}
                      </select>
                    </div>
                    {errors.topicWord && touched.topicWord && (
                      <div className="text-danger">{errors.topicWord}</div>
                    )}
                  </div>
                  <div className="form-group row mb-3">
                    <label htmlFor="user" className="form-label">
                      Último usuario que actualizó la palabra:
                    </label>
                    <div className="col-12">
                      <h3>
                        <span className="badge bg-success">
                          {values.lastUser}
                        </span>
                      </h3>
                      <span className="text-muted">
                        Si actualiza o agrega una palabra, su nombre se verá en
                        este campo
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
                        titleWord: formatText(values.titleWord),
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
                        titleWord: formatText(values.titleWord),
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
