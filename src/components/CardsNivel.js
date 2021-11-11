import React from 'react'
import CardNivel from './CardNivel'

export default function CardsNivel() {
  return (
    <div className="container flex-container">
      <div className="row">
        <div className="col-md-3 flex">
          <CardNivel estado={1} titulo = "Objetos y Clases" desc = "Tipos de datos"></CardNivel>
        </div>
        <div className="col-md-3 flex">
          <CardNivel estado={0} titulo="Abstraccion"></CardNivel>
        </div>
        <div className="col-md-3 flex">
          <CardNivel estado={-1} titulo="Encapsulamiento" desc="Tipos de Modificadores de Acceso"></CardNivel>
        </div>
        <div className="col-md-3 flex">
          <CardNivel estado={-1} titulo="Encapsulamiento" desc="Atributos"></CardNivel>
        </div>
        <div className="col-md-3 flex">
          <CardNivel estado={-1} titulo="Encapsulamiento" desc="Metodos"></CardNivel>
        </div>
        <div className="col-md-3 flex">
          <CardNivel estado={-1} titulo="Encapsulamiento" desc="Constructores"></CardNivel>
        </div>
        <div className="col-md-3 flex">
          <CardNivel estado={-1} titulo="Encapsulamiento" desc="Variables locales y globales"></CardNivel>
        </div>
        <div className="col-md-3 flex">
          <CardNivel estado={-1} titulo="Definicio de Clases" desc="Modificador static y final"></CardNivel>
        </div>
        <div className="col-md-3 flex">
          <CardNivel estado={-1} titulo="Herencia"></CardNivel>
        </div>
        <div className="col-md-3 flex">
          <CardNivel estado={-1} titulo="Polimorfismo"></CardNivel>
        </div>
      </div>
    </div>
  )
}
