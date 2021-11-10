import React from 'react'
import CardNivel from './CardNivel'

export default function CardsNivel() {
  return (
    <div className="container flex-container">
      <div className="row">
        <div className="col-md-3 flex">
          <CardNivel estado={1}></CardNivel>
        </div>
        <div className="col-md-3 flex">
          <CardNivel estado={0}a></CardNivel>
        </div>
        <div className="col-md-3 flex">
          <CardNivel estado={-1}b></CardNivel>
        </div>
        <div className="col-md-3 flex">
          <CardNivel estado={-1}></CardNivel>
        </div>
        <div className="col-md-3 flex">
          <CardNivel estado={-1}></CardNivel>
        </div>
      </div>
    </div>
  )
}
