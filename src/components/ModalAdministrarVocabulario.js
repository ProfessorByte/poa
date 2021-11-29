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
                Actualizar contenido de vocabulario
              </h5>
              <button
                type="button"
                className="btn btn-dark"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                
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
                    Selecciona un palabra
                  </button>
                  <ul className="dropdown-menu col-12">
                    <li>
                      <button type="button" className="dropdown-item">
                        palabra1
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        palabra2
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        palabra3
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="form-group row mb-3">
                <label for="palabra" className="form-label">
                  Palabra:
                </label>
                <div className="col-md-10">
                  <input
                    type="text"
                    className="form-control"
                    id="palabra"
                    name="palabra"
                    placeholder="Palabra"
                    required
                  />
                </div>
              </div>
            
              <div className="form-group row mb-3">
                <label for="Descripcion-palabra" className="form-label">
                  Descripción:
                </label>
                <div className="col-md-10">
                  <input
                    type="text"
                    className="form-control"
                    id="descripcion-palabra"
                    name="descripcion-palabra"
                    placeholder="Añade la descripción de la palabra aquí"
                    required
                  />
                </div>
              </div>

              <div className="form-group row mb-3">
                <label for="tema-vocabulario" className="form-label">
                  Tema:
                </label>
                <div className="col-md-10">
                  <select
                    name="tema-vocabulario"
                    id="tema-vocabulario"
                    className="form-select"
                    
                  >
                    <option selected value="">
                      Selecciona el tema
                    </option>
                    <option></option>
                    <option></option>
                  </select>
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
