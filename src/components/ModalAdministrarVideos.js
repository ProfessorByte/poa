import React from "react";
import "../css/ModalAdminStyles.css";

export const ModalAdministrarVideos = ({ modalId }) => {
  return (
    <form>
      <div className="modal fade" id={modalId} tabindex={-1} aria-hidden={true}>
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
              />
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
                  <ul className="dropdown-menu col-12">
                    <li>
                      <button type="button" className="dropdown-item">
                        vídeo1
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        vídeo2
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        vídeo3
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="form-group row mb-3">
                <label for="title-videos" className="form-label">
                  Título del vídeo:
                </label>
                <div className="col-md-10">
                  <input
                    type="text"
                    className="form-control"
                    id="title-videos"
                    name="title-videos"
                    placeholder="Título de referencia"
                    required
                  />
                </div>
              </div>
              <div className="form-group row mb-3">
                <label for="tema-videos" className="form-label">
                  Tema:
                </label>
                <div className="col-md-10">
                  <select
                    name="tema-videos"
                    id="tema-videos"
                    className="form-select"
                    
                  >
                    <option selected value="">
                      Selecciona el tema
                    </option>
                    <option></option>
                    <option></option>
                  </select>
                </div>
              <div className="form-group row mb-3">
                <label for="enlace-video" className="form-label">
                  Enlace de YouTube:
                </label>
                <div className="col-md-10">
                  <input
                    type="url"
                    className="form-control"
                    id="enlace-video"
                    name="enlace-video"
                    placeholder="Enlace del vídeo"
                    required
                  />
                </div>
              </div>
              <div className="form-group row mb-3">
                <label for="user" className="form-label">
                  Último usuario que actualizó el recurso:
                </label>
                <div className="col-md-10">
                  <h3>
                    <span className="badge bg-success">
                      
                    </span>
                  </h3>
                  <span className="text-muted">
                    Si actualiza o agrega un recurso, su nombre se verá en este
                    campo
                  </span>
                </div>
              </div>
            

            </div>
            <div className="modal-footer footer-administration">
              <button type="submit" className="btn btn-success">
                Actualizar
              </button>
              <button type="submit" className="btn btn-secondary">
                Agregar
              </button>
              <button type="submit" className="btn btn-danger">
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </form>
  );
};
