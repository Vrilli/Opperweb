import React from 'react'
import "../styles/Registro.css"
import { useNavigate } from 'react-router';
import { register } from "../firebaseConfig"
import { useForm } from '../hooks/useForm';
import Carrusel from './Carrusel';
import "../styles/Registro.css"






const Registro = () => {


  const [values, handleInputChange] = useForm({
    username: "",
    email: "",
    password: "",
    password2: "",
    cedula: ""
  })

  const { username, email, password,password2, cedula } = values

  const handleSubmit = async (e) => {
    e.preventDefault()
    register(email, password, username, password2,cedula)
  }


  const Navigate = useNavigate()
  return (
    
    <div className="login-container"  onSubmit={handleSubmit}>
    <div className="login-info-container">
      
      <img  className="title1" src='https://res.cloudinary.com/vrilli/image/upload/v1647823389/image_1_k6srbi.png' alt='' />
      <h1 className="title"> anime<span className="spa">yabu.</span> </h1>
    
      <form className="inputs-container" onSubmit={handleSubmit}>
         
        <div className='fles'>
         <img  className="img-logi1" src="https://res.cloudinary.com/vrilli/image/upload/v1647954073/pack2818_2_dsfa0l.png" alt="" /><br/>
         <img className="img-logi" src="https://res.cloudinary.com/vrilli/image/upload/v1647954114/ようこそ_oyce4l.png" alt="" /> <br/>
         </div>

         <h2 className="tit">¡Bienvenidos!</h2> <br/>
           
         <div className='flex'>
         <div class="form-check">
             <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
             <label className="form-check-label" for="flexRadioDefault1">
                Persona Jurídica
             </label>
          </div>
           <div className="form-check">
             <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
              <label className="form-check-label" for="flexRadioDefault2">
                  Persona Natural
             </label>
            </div>
            </div>


         <h3 className="letra">Nombre Completo</h3>
         <input className="input" type="text" name="username" placeholder="Nombre" onChange={handleInputChange} value={username} />
          <h3 className="letra">Email</h3>
          <input className="input1" type="text"  name="email" placeholder="Email" onChange={handleInputChange} value={email} />

          <h3 className="letra">Cédula</h3>
          <input className="input1" type="number"  name="cedula" placeholder="Cedula" onChange={handleInputChange} value={cedula} />

          <h3 className="letra">Contraseña</h3>
          <input className="input" type="password" name="password" placeholder="password" onChange={handleInputChange} value={password} />
            
          <h3 className="letra">Confirmar Contraseña</h3>
          <input className="input" type="password" name="password2" placeholder="password2" onChange={handleInputChange} value={password2} />

          
          <div className="boto">
           <button  type="buttom" className='boton1' >
           Registrarte
          </button>

          <button type="buttom" className='boton1' onClick={() => {
           Navigate('/FormLogin')
          }}>
          Login
          </button>
           </div>

         </form>

    </div>
      
     <div className="container">
          <Carrusel />
          <img src="https://res.cloudinary.com/vrilli/image/upload/v1647836263/Ellipse_2_lotwn2.png" alt="" />
      </div>
     
</div>

    


  )
}

export default Registro