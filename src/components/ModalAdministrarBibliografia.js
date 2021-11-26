import React from "react";
import "../css/ModalAdminStyles.css";

export const ModalAdministrarBibliografia = ({ modalId }) => {
  return (
    <form>
      <div className="modal fade" id={modalId} tabindex={-1} aria-hidden={true}>
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
                <div className="dropdown d-grid gap-2 col-10 mb-3">
                  <button
                    type="button"
                    className="btn btn-primary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded={false}
                  >
                    Selecciona un recurso bibliográfico
                  </button>
                  <ul className="dropdown-menu col-12">
                    <li>
                      <button type="button" class="dropdown-item">
                        bibliografía1
                      </button>
                    </li>
                    <li>
                      <button type="button" class="dropdown-item">
                        bibliografía2
                      </button>
                    </li>
                    <li>
                      <button type="button" class="dropdown-item">
                        bibliografía3
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="form-group row mb-3">
                <label for="title-bibliography" className="form-label">
                  Título de referencia:
                </label>
                <div className="col-md-10">
                  <input
                    type="text"
                    className="form-control"
                    id="title-bibliography"
                    name="title-bibliography"
                    placeholder="Título de referencia"
                    required
                  />
                </div>
              </div>
              <div className="form-group row mb-3">
                <label for="topics-bibliography" className="form-label">
                  Temas:
                </label>
                <div className="col-md-10">
                  <input
                    type="text"
                    className="form-control"
                    id="topics-bibliography"
                    name="topics-bibliography"
                    placeholder="Temas citados en el recurso bibliográfico"
                    required
                  />
                </div>
              </div>
              <div className="form-group row mb-3">
                <label for="author-bibliography" className="form-label">
                  Autor/Nombre de la página:
                </label>
                <div className="col-md-10">
                  <input
                    type="text"
                    className="form-control"
                    id="author-bibliography"
                    name="author-bibliography"
                    placeholder="Autor/Nombre de la página"
                    required
                  />
                </div>
              </div>
              <div className="form-group row mb-3">
                <label for="type-bibliography" className="form-label">
                  Tipo:
                </label>
                <div className="col-6 col-md-6">
                  <select
                    name="type-bibliography"
                    id="type-bibliography"
                    className="form-select"
                  >
                    <option selected value="">
                      Selecciona el tipo del recurso
                    </option>
                    <option value="PDF">PDF</option>
                    <option value="Página Web">Página Web</option>
                  </select>
                </div>
                <div className="col-6 col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    id="type-bibliography"
                    name="type-bibliography"
                    placeholder="Otro tipo de recurso"
                    required
                  />
                </div>
              </div>
              <div className="form-group row mb-3">
                <label for="link-bibliography" className="form-label">
                  Enlace:
                </label>
                <div className="col-md-10">
                  <input
                    type="url"
                    className="form-control"
                    id="link-bibliography"
                    name="link-bibliography"
                    placeholder="Enlace del recurso bibliográfico"
                    required
                  />
                </div>
              </div>
              <div className="form-group row mb-3">
                <label for="user-bibliography" className="form-label">
                  Último usuario que actualizó el recurso:
                </label>
                <div className="col-md-10">
                  <h3>
                    <span className="badge bg-success">UsuarioX</span>
                  </h3>
                  <span className="text-muted">
                    Si actualiza el recurso, su nombre se verá en este campo
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
    </form>
  );
};
