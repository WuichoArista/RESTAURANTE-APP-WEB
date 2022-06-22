import React , {useState} from 'react'
import './Form.css'
import { db } from '../../firebase.js'
import {   collection , addDoc   } from 'firebase/firestore'


const Form = () => {

    const [ form , setForm ]=useState({})
    const [ flag , setFlag ] =useState(true)

    const manejarCambio = ( evento ) => {
         setForm({
            ...form,
            [ evento.name ]: evento.value
         })
    }

    const manejarClick = async () => {
      await addDoc(collection( db, 'evento'), form);
      setForm()
      setFlag(false)
     }

  if( flag ) {
    return (
      <section>
        <div className='formulario-container'>
          <div className='formulario'>
              <input onBlur={ ( e ) => manejarCambio( e.target ) } type="text" name='nombre' placeholder='Nombre' />
              <input onBlur={ ( e ) => manejarCambio( e.target ) } type="text" name='telefono' placeholder='Telefono' />
              <input onBlur={ ( e ) => manejarCambio( e.target ) } type="email" name='correo' placeholder='E-mail'/>
              <textarea onBlur={ ( e ) => manejarCambio( e.target ) } name="mensaje" cols="10" rows="10" placeholder='Cuentanos sobre tu evento'></textarea>
              <button onClick={ () => manejarClick() } type='submit'>Enviar</button>
          </div>
        </div>
      </section>
    )
  }else{
    return (
      <section>
          <div className="mensaje-formulario-eventos">
            <h2>Tu mensaje fue enviado, en un momento te contactaremos, gracias</h2>
          </div>
      </section>
    )
  }
}

export default Form