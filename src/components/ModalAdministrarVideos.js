import { updateDoc } from "@firebase/firestore";
import { Formik } from "formik";
import React, { useState } from "react";
import { useUser } from "reactfire";
import "../css/ModalAdminStyles.css";
import { getEstadosNivs, getSectionsQuery } from "../server/api";

export const ModalAdministrarVideos = ({ modalId, listSections }) => {
  const defaultFormValues = {
    titleVideo: "",
    sectionId: -1,
    indexVideo: -1,
    linkVideo: "",
    userName: "",
  };
  const [formValues, setFormValues] = useState(defaultFormValues);
  const [action, setAction] = useState("");
  const { data: user } = useUser();

  const removeItemFromArr = (arr, item) => {
    var i = arr.indexOf(item);
    arr.splice(i, 1);
  };

  const handleUpdate = async () => {
    if (formValues.sectionId === -1 || formValues.indexVideo === -1) {
      alert("No se puede actualizar una referencia sin identificarla primero");
      return;
    } else {
      let userName = "";
      const users = await getEstadosNivs(user.uid);
      users.forEach((user) => {
        userName = user.data().name;
      });
      setFormValues({ ...formValues, userName: userName });
      let listTopicsAux = listSections[formValues.sectionId - 1].topics;
      listTopicsAux[formValues.indexVideo].title = formValues.titleVideo;
      listTopicsAux[formValues.indexVideo].videoLink = formValues.linkVideo;
      listTopicsAux[formValues.indexVideo].userName = formValues.userName;
      const listSectionsQuery = await getSectionsQuery(formValues.sectionId);
      listSectionsQuery.forEach((section) => {
        updateDoc(section.ref, {
          sectionId: section.data().sectionId,
          title: section.data().title,
          topics: listTopicsAux,
        });
      });
      alert("Se actualizó el vídeo seleccionado");
    }
  };

  const handleAdd = async () => {
    let userName = "";
    const users = await getEstadosNivs(user.uid);
    users.forEach((user) => {
      userName = user.data().name;
    });
    setFormValues({ ...formValues, userName: userName });
    let listTopicsAux = listSections[formValues.sectionId - 1].topics;
    listTopicsAux.push({
      title: formValues.titleVideo,
      videoLink: formValues.linkVideo,
      userName: formValues.userName,
    });
    const listSectionsQuery = await getSectionsQuery(formValues.sectionId);
    listSectionsQuery.forEach((section) => {
      updateDoc(section.ref, {
        sectionId: section.data().sectionId,
        title: section.data().title,
        topics: listTopicsAux,
      });
    });
    setFormValues({ ...formValues, indexVideo: listTopicsAux.length - 1 });
    alert("Se agregó el vídeo correctamente");
  };

  const handleDelete = async () => {
    if (formValues.sectionId === -1 || formValues.indexVideo === -1) {
      alert("No se puede eliminar una referencia sin identificarla primero");
      return;
    } else {
      let userName = "";
      const users = await getEstadosNivs(user.uid);
      users.forEach((user) => {
        userName = user.data().name;
      });
      setFormValues({ ...formValues, userName: userName });
      let listTopicsAux = listSections[formValues.sectionId - 1].topics;
      removeItemFromArr(listTopicsAux, listTopicsAux[formValues.indexVideo]);
      const listSectionsQuery = await getSectionsQuery(formValues.sectionId);
      listSectionsQuery.forEach((section) => {
        updateDoc(section.ref, {
          sectionId: section.data().sectionId,
          title: section.data().title,
          topics: listTopicsAux,
        });
      });
      setFormValues(defaultFormValues);
      alert("Se eliminó el vídeo seleccionado");
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

  const validateYouTubeUrl = (url) => {
    if (url) {
      var regExp =
        /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
      if (url.match(regExp)) {
        return true;
      }
    }
    return false;
  };

  const handleValidations = (values) => {
    let errors = {};
    if (!values.titleVideo) {
      errors.titleVideo = "El título es requerido";
    } else if (!/^[a-zA-ZÀ-ÿ\s.,!?]{1,40}$/.test(values.titleVideo)){
      errors.titleVideo = "El título solo puede contener letras, espacios y .,!?";
    }

    if (Number(values.sectionId) === -1) {
      errors.sectionId = "La sección es requerida";
    }

    if (!values.linkVideo) {
      errors.linkVideo = "El link es requerido";
    } else if (!validateYouTubeUrl(values.linkVideo)) {
      errors.linkVideo = "Debe ingresar un link de YouTube válido";
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
                    Actualizar contenido de vídeos
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
                    <div className="dropdown d-grid gap-2 col-10 mb-3">
                      <button
                        type="button"
                        className="btn btn-primary dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded={false}
                      >
                        Selecciona un vídeo
                      </button>
                      <ul className="dropdown-menu col-12 selector-administration">
                        {listSections.map((section) => (
                          <div key={section.sectionId}>
                            {section.topics.map((topic, index) => (
                              <li key={index}>
                                <button
                                  type="button"
                                  className="dropdown-item"
                                  onClick={() => {
                                    setFormValues({
                                      titleVideo: topic.title,
                                      sectionId: section.sectionId,
                                      indexVideo: index,
                                      linkVideo: topic.videoLink,
                                      userName: topic.userName,
                                    });
                                  }}
                                >
                                  {topic.title}
                                </button>
                              </li>
                            ))}
                          </div>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="form-group row mb-3">
                    <label htmlFor="title-videos" className="form-label">
                      Título del vídeo:
                    </label>
                    <div className="col-md-10">
                      <input
                        type="text"
                        className="form-control"
                        id="title-videos"
                        name="titleVideo"
                        placeholder="Título de referencia"
                        value={values.titleVideo}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                    </div>
                    {touched.titleVideo && errors.titleVideo && (
                      <div className="text-danger">{errors.titleVideo}</div>
                    )}
                  </div>
                  <div className="form-group row mb-3">
                    <label htmlFor="tema-videos" className="form-label">
                      Sección del vídeo:
                    </label>
                    <div className="col-md-10">
                      <select
                        name="sectionId"
                        id="tema-videos"
                        className="form-select"
                        value={values.sectionId}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      >
                        <option defaultValue={-1}>Selecciona el tema</option>
                        {listSections.map((section) => (
                          <option
                            key={section.sectionId}
                            value={section.sectionId}
                          >
                            {section.title}
                          </option>
                        ))}
                      </select>
                    </div>
                    {touched.sectionId && errors.sectionId && (
                      <div className="text-danger">{errors.sectionId}</div>
                    )}
                  </div>
                  <div className="form-group row mb-3">
                    <label htmlFor="enlace-video" className="form-label">
                      Enlace de YouTube:
                    </label>
                    <div className="col-md-10">
                      <input
                        type="url"
                        className="form-control"
                        id="enlace-video"
                        name="linkVideo"
                        placeholder="Enlace del vídeo"
                        value={values.linkVideo}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                    </div>
                    {touched.linkVideo && errors.linkVideo && (
                      <div className="text-danger">{errors.linkVideo}</div>
                    )}
                  </div>
                  <div className="form-group row mb-3">
                    <label htmlFor="user" className="form-label">
                      Último usuario que actualizó el recurso:
                    </label>
                    <div className="col-md-10">
                      <h3>
                        <span className="badge bg-success">
                          {values.userName}
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
