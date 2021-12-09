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

  const handleUpdate = async () => {
    let userName = "";
    const users = await getEstadosNivs(currentUserId);
    users.forEach((user) => {
      userName = user.data().name;
    });
    updateDoc(doc(db, `vocabulario/${formValues.lastItemId}`), {
      titulo: formValues.titleWord,
      descripcion: formValues.descriptionWord,
      tema: formValues.topicWord,
      ultimoUsuario: userName,
    });
    alert("Se modificó la palabra correctamente");
  };

  const handleAdd = async () => {
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
    alert("Se agregó la palabra correctamente");
  };

  const handleDelete = () => {
    deleteDoc(doc(db, `vocabulario/${formValues.lastItemId}`));
    alert("Se eliminó la palabra correctamente");
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
    }  else if (!/^[a-zA-ZÀ-ÿ ]+$/.test(values.titleWord)){
      errors.titleWord = "El palabra solo puede contener letras y espacios";
    }
    
    if (values.titleWord.length > 40){
      errors.titleWord =
        "La palabra es muy larga";
    }
    if (!values.descriptionWord) {
      errors.descriptionWord = "La descripción es requerida";
    }

    if (values.descriptionWord.length > 600){
      errors.descriptionWord =
        "La descripción de la palabra es muy larga";
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
                      <div className="text-danger">{errors.descriptionWord}</div>
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
                      Último usuario que actualizó el recurso:
                    </label>
                    <div className="col-12">
                      <h3>
                        <span className="badge bg-success">
                          {values.lastUser}
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
                      setFormValues(values);
                      setAction("update");
                    }}
                  >
                    Actualizar
                  </button>
                  <button
                    type="submit"
                    className="btn btn-secondary"
                    onClick={() => {
                      setFormValues(values);
                      setAction("add");
                    }}
                  >
                    Agregar
                  </button>
                  <button
                    type="submit"
                    className="btn btn-danger"
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
