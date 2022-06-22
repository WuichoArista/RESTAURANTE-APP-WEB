import React , { useState , useEffect } from 'react'
import {   collection ,  onSnapshot , doc , deleteDoc } from 'firebase/firestore'
import { db } from '../../firebase.js'
import './Gerencia.css'


const Gerencia = () => {
  
  const[ reservas , setReservas ] = useState([])

  const getData = () => {
    const listaReservas = []
    onSnapshot( collection( db , 'reserva' ) , ( snapshot ) => {
      snapshot.docs.forEach( ( doc ) => {
        listaReservas.push(
          {
            ...doc.data(),
            id:doc.id
          }
        )
        setReservas( listaReservas )
      })
    })
  }

  useEffect( () => {
    getData()
  },[])

  const borrar = async ( id ) => {
    await deleteDoc( doc( db , 'reserva' , id))
    getData()
  }

  return (
    <main>
        <h2>Reservas</h2>
        <div className="gerencia_container">
          {
            reservas.map( ( reserva , i) => {
              return(
                <div className='gerencia_tarjeta' key={i}>
                    <p>Reserva a nombre de: {reserva.nombreReserva}</p>
                    <p>para: {reserva.personas}</p>
                    <p>Fecha de reserva: {reserva.diaReserva}</p>
                    <p>Hora de reserva: {reserva.horaReserva}</p>
                    <button onClick={ () => borrar( reserva.id ) } >borrar</button>
                </div>
              )
            })
          }
        </div>
    </main>
  )
}

export default Gerencia