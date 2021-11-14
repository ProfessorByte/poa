import React from 'react'
import CardNivel from './CardNivel'
import Nivs from "../nivs.json";

export default function CardsNivel() {

  const closedIntervalNivs = (listNivs, minId,maxId) => {
    return listNivs.filter(
      (nivel) => nivel.id >= minId && nivel.id <= maxId
    );
  }

  return (
    <div> 
      <h2>Objetos y Clases:</h2> 
      <div className="container flex-container">
        <div className="row">
            { closedIntervalNivs(Nivs,1,2).map(post => {
                return (
                  <div className="col-md-3 flex">
                    <CardNivel estado={post.estado} titulo = {post.titulo} num={post.id}></CardNivel>
                  </div>
                )
              }) 
            }
        </div>
      </div>
      <h2>Encapsulamiento:</h2>
      <div className="container flex-container">
        <div className="row">
            { closedIntervalNivs(Nivs,3,3).map(post => {
                return (
                  <div className="col-md-3 flex">
                    <CardNivel estado={post.estado} titulo = {post.titulo} num={post.id}></CardNivel>
                  </div>
                )
              }) 
            }
        </div>
      </div>
      <h2>Definiciones de Clases:</h2>
      <div className="container flex-container">
        <div className="row">
            { closedIntervalNivs(Nivs,4,7).map(post => {
                return (
                  <div className="col-md-3 flex">
                    <CardNivel estado={post.estado} titulo = {post.titulo} num={post.id}></CardNivel>
                  </div>
                )
              }) 
            }
        </div>
      </div>
      <h2>Estructuras de Control:</h2>
      <div className="container flex-container">
        <div className="row">
            { closedIntervalNivs(Nivs,11,11).map(post => {
                return (
                  <div className="col-md-3 flex">
                    <CardNivel estado={post.estado} titulo = {post.titulo} num={post.id}></CardNivel>
                  </div>
                )
              }) 
            }
        </div>
      </div>
      <h2>Interaccion de objetos:</h2>
      <div className="container flex-container">
        <div className="row">
            { closedIntervalNivs(Nivs,8,8).map(post => {
                return (
                  <div className="col-md-3 flex">
                    <CardNivel estado={post.estado} titulo = {post.titulo} num={post.id}></CardNivel>
                  </div>
                )
              }) 
            }
        </div>
      </div>
      <h2>Arreglos y Matrices:</h2>
      <div className="container flex-container">
        <div className="row">
            { closedIntervalNivs(Nivs,9,9).map(post => {
                return (
                  <div className="col-md-3 flex">
                    <CardNivel estado={post.estado} titulo = {post.titulo} num={post.id}></CardNivel>
                  </div>
                )
              }) 
            }
        </div>
      </div>
      <h2>Estructuras de control iterativas:</h2>
      <div className="container flex-container">
        <div className="row">
            { closedIntervalNivs(Nivs,10,10).map(post => {
                return (
                  <div className="col-md-3 flex">
                    <CardNivel estado={post.estado} titulo = {post.titulo} num={post.id}></CardNivel>
                  </div>
                )
              }) 
            }
        </div>
      </div>
      <h2>Herencia:</h2>
      <div className="container flex-container">
        <div className="row">
            { closedIntervalNivs(Nivs,12,15).map(post => {
                return (
                  <div className="col-md-3 flex">
                    <CardNivel estado={post.estado} titulo = {post.titulo} num={post.id}></CardNivel>
                  </div>
                )
              }) 
            }
        </div>
      </div>
      <h2>Polimorfismo:</h2>
      <div className="container flex-container">
        <div className="row">
            { closedIntervalNivs(Nivs,16,17).map(post => {
                return (
                  <div className="col-md-3 flex">
                    <CardNivel estado={post.estado} titulo = {post.titulo} num={post.id}></CardNivel>
                  </div>
                )
              }) 
            }
        </div>
      </div>
    </div>
  )
}
