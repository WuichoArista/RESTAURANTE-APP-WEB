import React , {useState } from 'react';
import './FormReservacion.css';
import { db } from '../../firebase.js'
import {   collection , addDoc   } from 'firebase/firestore'

const FormReservacion = () => {

    const [ form , setForm ] = useState({});

    const [ fecha  ] = useState( new Date() );
    let año = fecha.getFullYear();
    let mes = fecha.getMonth() + 1;
    let dia = fecha.getDate();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();

    const manejarCambio = ( e ) => {
        setForm( {
            ...form,
            [e.name] : e.value,
            diaRegistro: dia,
            mesRegistro: mes,
            añoRegistro: año,
            horaRegistro: ( hora < 10 ? '0' : '' ) + hora + ':' + ( minutos < 10 ? '0' : '') + minutos
        } );
    };

    const manejarClick = async () => {
        await addDoc(collection( db , 'reserva' ),form)
        setForm()
        console.log('ya debe de estar');
    };

    const getData = () => {
        const reservas = []
    }
    
  return (
    <section>
        <div className="formulario-reservacion-container">
            <div className="formulario-reservacion">
                <div className="formulario-reservacion-input">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                   <input onBlur={ ( e ) => manejarCambio( e.target ) } type="text" name="nombreReserva" placeholder='Nombre de la reserva' />
                </div>
                <div className="formulario-reservacion-input">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg>
                   <input onBlur={ ( e ) => manejarCambio( e.target ) } type="date" name="diaReserva" defaultValue={ `${ año }-${ ( mes < 10 ? '0' : '' ) + mes }-${ ( dia < 10 ? '0' : '' ) + dia }` } />
                </div>
                <div className="formulario-reservacion-input">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                   </svg>
                   <input onBlur={ ( e ) => manejarCambio( e.target ) }  type="time" name="horaReserva" defaultValue={`${ ( hora < 10 ? '0' : '' ) + hora }:${ ( minutos < 10 ? '0' : '') + minutos }`} />
                </div>
                <div className="formulario-reservacion-input">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        <path fillRule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                        <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                    </svg>
                    <select onBlur={ ( e ) => manejarCambio( e.target ) }  name="personas">
                        <option value="1 persona">1 persona</option>
                        <option value="2 persona">2 persona</option>
                        <option value="3 persona">3 persona</option>
                        <option value="4 persona">4 persona</option>
                        <option value="5 persona">5 persona</option>
                    </select>
                </div>
                <div className="formulario-reservacion-input">
                   <button onClick={() => manejarClick()}>Reservar</button>
                </div>
            </div>
        </div>
    </section>
  )
};

export default FormReservacion;