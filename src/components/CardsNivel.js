import React from 'react'
import CardNivel from './CardNivel'

export default function CardsNivel() {
  return (
    <div>
      <h2>Objetos y Clases:</h2>
      <div className="container flex-container">
        <div className="row">
          <div className="col-md-3 flex">
            <CardNivel estado={1} desc = "Parametros" num="01"></CardNivel>
          </div>
          <div className="col-md-3 flex">
            <CardNivel estado={0} desc ="Tipos de Datos" num="02"></CardNivel>
          </div>
          <div className="col-md-3 flex">
            <CardNivel estado={-1} desc="Abstraccion" num="03"></CardNivel>
          </div>
        </div>
      </div>
      <h2>Encapsulamiento:</h2>
      <div className="container flex-container">
        <div className="row">
          <div className="col-md-3 flex">
            <CardNivel estado={-1} desc="Tipos de Modificadores de Acceso" num="04"></CardNivel>
          </div>
          <div className="col-md-3 flex">
            <CardNivel estado={-1} desc="Modificador static y final" num="05"></CardNivel>
          </div>
        </div>
      </div>
      <h2>Definiciones de Clases:</h2>
      <div className="container flex-container">
        <div className="row">
          <div className="col-md-3 flex">
            <CardNivel estado={-1} desc="Conversion ascendente y descendente de tipos" num="06"></CardNivel>
          </div>
          <div className="col-md-3 flex">
            <CardNivel estado={-1} desc="Metodos" num="07"></CardNivel>
          </div>
          <div className="col-md-3 flex">
            <CardNivel estado={-1} desc="Constructores" num="08"></CardNivel>
          </div>
          <div className="col-md-3 flex">
            <CardNivel estado={-1} desc="Variables locales y globales" num="09"></CardNivel>
          </div>
        </div>
      </div>
      <h2>Estructuras de Control:</h2>
      <div className="container flex-container">
        <div className="row">
          <div className="col-md-3 flex">
            <CardNivel estado={-1} desc="If-Else" num="10"></CardNivel>
          </div>
        </div>
      </div>
      <h2>Interaccion de objetos:</h2>
    </div>
  )
}
