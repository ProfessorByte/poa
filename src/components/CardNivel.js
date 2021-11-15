import React from 'react'

export default function CardNivel({ estado, titulo, num }) {
  const getBackground = (n) => {
    var bg = "";
      if( n === -1 ){
        bg = "card-body card-nivel-c";
      }else if(n === 0){
        bg = "card-body card-nivel-b";
      }else{
        bg = "card-body card-nivel-a";
      }
      return bg;
  }
  return (
    <div >
      <div className="card text-white mb-3 card-nivel">
        {/*<div className="card-header text-center">{titulo}</div>*/}
        <div className={getBackground(estado)}>
          <div className="card-header">{num}</div>
          <h6 className="card-text">{titulo}</h6>
          <button type="button" className="btn btn-light btn-sm btn-block" onClick={() => alert("Hello from here")}>start</button>
        </div>
      </div>
    </div>
  )
}
