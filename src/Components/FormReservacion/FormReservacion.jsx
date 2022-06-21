import React , {useState , useEffect} from 'react'

const FormReservacion = () => {
    const [ fecha , setFecha ] = useState( new Date() )
    
  return (
    <section>
        <div className="formulario-reservacion-container">
            <div className="formulario-reservacion">
                <input type="date" name="dia" defaultValue={ `${fecha.getFullYear()}-${ ('0') + (fecha.getMonth() + 1) }-${fecha.getDate()}` } />
                <input type="time" name="hora" defaultValue={`${ (fecha.getHours() < 10 ? '0' : '') + fecha.getHours() }:${ (fecha.getMinutes() < 10 ? '0' : '') + fecha.getMinutes() }`} />
                <select name="personas">
                    <option value="1 persona">1 persona</option>
                    <option value="2 persona">2 persona</option>
                    <option value="3 persona">3 persona</option>
                    <option value="4 persona">4 persona</option>
                    <option value="5 persona">5 persona</option>
                </select>
                <button>Reservar</button>
            </div>
        </div>
    </section>
  )
}

export default FormReservacion