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
        <h2 className='Gerencia_titulo'>Reservas</h2>
        <div className="gerencia_container">
          {
            reservas.map( ( reserva , i) => {
              return(
                <div className='gerencia_tarjeta' key={i}>
                    <h4>Reserva a nombre de:</h4>
                    <p>{reserva.nombreReserva}</p>
                    <h4>Personas:</h4>
                    <p>{reserva.personas}</p>
                    <h4>Fecha de reserva:</h4>
                    <p>{reserva.diaReserva}</p>
                    <h4>Hora de reserva:</h4>
                    <p>{reserva.horaReserva}</p>
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