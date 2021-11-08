import React from 'react'
import CardNivel from './CardNivel'

export default function CardsNivel() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <CardNivel></CardNivel>
        </div>
        <div className="col-md-4">
          <CardNivel></CardNivel>
        </div>
      </div>
    </div>
  )
}
