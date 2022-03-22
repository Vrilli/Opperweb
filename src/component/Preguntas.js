import { useState } from 'react';
import "../styles/Preguntas.css"
import { Link } from 'react-router-dom';
import { CerrarSesion, useAuth } from '../firebaseConfig';
import { useNavigate } from 'react-router';





export const Preguntas = () => {

  const Navigate = useNavigate()

  const [loading, setloading] = useState(false)

  async function handleCerrarSesion() {
    setloading(true)
    try {
      await CerrarSesion()
    } catch {
      alert("error!")
    }
    setloading(false)
  }

  const currentUser = useAuth()

  return (
    <div className="dividida" >
      <div className='izquierda'>
      <img  className="title1" src='https://res.cloudinary.com/vrilli/image/upload/v1647823389/image_1_k6srbi.png' alt='' />
            <h1 className="title">anime<span className="spa">yabu.</span> </h1><br /><br /><br /><br /><br /><br />

            <h2 className="title3">Categorias</h2>
            <ul>
              <li>
               Ver todos
              </li>
              <li>
               Crear
              </li>
            </ul><br /><br />
            <Link to='/login'>
              <button className="btn"  onClick={handleCerrarSesion} disabled={loading || !currentUser} >Cerrar Sesión</button>{' '}
            </Link>
          
      </div>



       <div className='derecha'>

       <div id='usuariolog'><h4>Hola,</h4><span className="Spa"> {currentUser?.displayName} </span></div>
       
            

         <h3 className="titu">Selecciona una opción:</h3>


           
         <div class="d-grid gap-2 col-6 mx-auto">
          <button className='boton2' onClick={() => {
            Navigate('/historial')
          }}>Ver todas las categorias</button>

         <button className='boton2' onClick={() => {
            Navigate('/crear')
          }}>Crear categoria</button>

          <Link to='/login'>
              <button className="boton2"  onClick={handleCerrarSesion} disabled={loading || !currentUser} >Cerrar Sesión</button>{' '}
            </Link>
            </div>


        

     </div>

      

    </div>
  )
}










