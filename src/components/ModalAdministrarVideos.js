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
                  <ul className="dropdown-menu col-12">
                    <li>
                      <button type="button" class="dropdown-item">
                        vídeo1
                      </button>
                    </li>
                    <li>
                      <button type="button" class="dropdown-item">
                        vídeo2
                      </button>
                    </li>
                    <li>
                      <button type="button" class="dropdown-item">
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
    </form>
  );
};
