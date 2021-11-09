import React from 'react'

export default function CardNivel() {
  return (
    <div onClick={() => alert("Hello from here")}>
      <div className="card text-white bg-success mb-3">
        <div class="card-header">Titulillo 1</div>
        <div className="card-body">
          <h4 className="card-title">Subtitulillo 1</h4>
          <p className="card-text">Pruebita de card simple</p>
        </div>
      </div>
    </div>
  )
}
