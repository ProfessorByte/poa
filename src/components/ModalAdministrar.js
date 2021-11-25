import React, { useState } from "react";
import "../css/ModalAdminStyles.css";

const ModalAdministrar = () => {
  const id1="ModalBibliografia"
  const id2="ModalVideos"
  const id3="ModalVocabulario"
  return (
<>
 
<div 
 className="modal fade" 
 id={id1} 
 tabindex="-1" 
 aria-hidden="true"
 aria-labelledby="modalTitle" 
 data-bs-backdrop="static">

   <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content">
         <div className="modal-header">
             <h5 className="modal-title" id="modalTitle">Actualizar contenido de bibliografía</h5>
             <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div> 
         <div className="modal-body p-5">
         
          <div className="dropdown row justify-content-end">
            <button className="btn btn-primary dropdown-toggle"  id="darkMenu" data-bs-toggle="dropdown" aria-expanded="false" >
                Selecciona un video
            </button>
            <div className="dropdown-menu ">
              <button className="dropdown-item" >video1</button>
              <button className="dropdown-item" >video2</button>
              <button className="dropdown-item" >video3</button>
            </div>
          </div>
          <div className="form-group">
            <label for="input" className="control-label">Título de referencia:</label>
            <div className="col-lg-10">
              <input  className="form-control" id="input" placeholder="obligatorio"/>
            </div>
            <label for="input" className="control-label">Autor/Nombre de la página:</label>
            <div className="col-lg-10">
              <input  className="form-control" id="input" placeholder="obligatorio"/>
            </div>
            <label for="input" className="control-label">Link:</label>
            <div className="col-lg-10">
              <input  className="form-control" id="input" placeholder="obligatorio"/>
            </div>
            <label for="input" className="control-label">Tipo:</label>
            <div class="input-group">
                <input type="text" class="form-control" aria-label="dropInput"/>
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tipo</button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">PDF</a>
                    <a class="dropdown-item" href="#">Página web</a>
                  </div>
                </div>
              </div>
            <label for="input" className="control-label">Temas:</label>
            <div className="col-lg-10">
              <input  className="form-control" id="input" placeholder="obligatorio"/>
            </div>

          </div>


         </div>
         <div className="modal-footer">
             <button className="btn btn-success" data-bs-dismiss="modal">Actualizar</button>
             <button className="btn btn-secondary" data-bs-dismiss="modal">Agregar</button>
             <button className="btn btn-danger" data-bs-dismiss="modal">Eliminar</button>
         </div>
      </div>
    </div>  
</div>

<div className="modal fade" id={id2} tabindex="-1" aria-hidden="true" aria-labelledby="modalTitle">
   <div className="modal-dialog">
      <div className="modal-content">
         <div className="modal-header">
             <h5 className="modal-title" id="modalTitle">Actualizacion</h5>
             <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div> 
         <div className="modal-body">
            <p>
                     
           </p> 
         </div>
         <div className="modal-footer">
             <button className="btn btn-secondary" data-bs-dismiss="modal">Guardar</button>
             <button className="btn btn-secondary" data-bs-dismiss="modal">Eliminar</button>
         </div>
      </div>
    </div>  
</div>
</>
  );
};

export default ModalAdministrar;