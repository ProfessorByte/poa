import React from 'react'
import CardNivel from './CardNivel'

export default function CardsNivel() {
  return (
    <div className="container flex-container">
      <div className="row">
        <div className="col-md-3 flex">
          <CardNivel></CardNivel>
        </div>
        <div className="col-md-3 flex">
          <CardNivel></CardNivel>
        </div>
        <div className="col-md-3 flex">
          <CardNivel></CardNivel>
        </div>
        <div className="col-md-3 flex">
          <CardNivel></CardNivel>
        </div>
        <div className="col-md-3 flex">
          <CardNivel></CardNivel>
        </div>
      </div>
    </div>
  )
}
