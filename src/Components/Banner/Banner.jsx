import React , {useState , useEffect} from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'

const Banner = ( { logo , pagina }) => {

    const [ scrollArriba , setScrollArriba ] = useState(0)

    const scrollParalax = () => {
         setScrollArriba( window.document.documentElement.scrollTop )
    }

    useEffect( () => {
        window.addEventListener( 'scroll' , scrollParalax)
    },[] )

 
  return (
    <div style={{height: `${window.innerHeight - 53}px`  }} className='banner-container'>
         <img style={ {  transform: `translateY( ${ scrollArriba * 0.20 }px )` } }  src={logo} alt="" />
         {
          pagina === 'home' ? <div className="texto-inicio" style={{ transform: `translateY(${ scrollArriba * -0.30 }px )` }}>
          <h3>Bienvenido</h3>
          <hr /> 
          <Link to={'/Reservaciones'}>
              <button>Reservar</button>
          </Link>
      </div> : ''
         }
    </div>
  )
}

export default Banner