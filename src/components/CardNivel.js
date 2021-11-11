import React from 'react'

export default function CardNivel({ estado, titulo, desc }) {
  console.log({estado});
  const getColor = (n) => {
      var color = "";
      if( estado === -1 ){
        color = "card text-white bg-secondary mb-3 ";
      }else if(estado === 0){
        color = "card text-white bg-warning mb-3 ";
      }else{
        color = "card text-white bg-success mb-3 ";
      }
      return color;
    }
  return (
    <div >
      <div className={getColor(estado)}>
        <div className="card-header">{titulo}</div>
        <div className="card-body">
          <p className="card-text">{desc}</p>
          <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group mr-5" role="group" aria-label="First group">
              <button type="button" className="btn btn-light" onClick={() => alert("Hello from here")}>Comenzar</button>
              <button type="button" className="btn btn-info" onClick={() => alert("Hello from here")}>Info</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
