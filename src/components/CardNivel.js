import React from 'react'

export default function CardNivel({ estado, titulo, desc, num }) {
  console.log({estado});
  const getColor = (n) => {
      var color = "";
      if( estado === -1 ){
        color = "card text-white bg-secondary mb-3 card-nivel";
      }else if(estado === 0){
        color = "card text-white bg-warning mb-3 card-nivel";
      }else{
        color = "card text-white bg-success mb-3 card-nivel";
      }
      return color;
    }
  return (
    <div >
      <div className={getColor(estado)}>
        {/*<div className="card-header text-center">{titulo}</div>*/}
        <div className="card-body">
          <div className="card-header">{num}</div>
          <h6 className="card-text">{desc}</h6>
          <button type="button" className="btn btn-light btn-sm btn-block" onClick={() => alert("Hello from here")}>start</button>
        </div>
      </div>
    </div>
  )
}
