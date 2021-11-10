import React from 'react'

export default function CardNivel({ estado }) {
  console.log({estado});
  const getColor = (n) => {
      var color = "";
      if( estado === -1 ){
        color = "card text-white bg-secondary mb-3";
      }else if(estado === 0){
        color = "card text-white bg-warning mb-3";
      }else{
        color = "card text-white bg-success mb-3";
      }
      return color;
    }
  return (
    <div onClick={() => alert("Hello from here")}>
      <div className={getColor(estado)}>
        <div class="card-header">Titulillo 1</div>
        <div className="card-body">
          <h4 className="card-title">Subtitulillo 1</h4>
          <p className="card-text">Pruebita de card simple</p>
        </div>
      </div>
    </div>
  )
}
