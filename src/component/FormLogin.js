import React from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { loginGoogle } from '../redux/actions/loginGoogle';
import { loginFacebook } from '../redux/actions/loginFacebook';
import { login } from '../firebaseConfig';
import Carrusel from './Carrusel';
import { Icon } from '@iconify/react';
import "../styles/FormLogin.css";






const FormLogin = () => {

  const dispatch = useDispatch()

  const iniciarSesion = (valores) => {
    login(valores.email, valores.password)
  }
  

  return (<>
    <Formik
      initialValues={{
        email: '',
        password: '',
        username: ''
      }}
    >
      {({ values, handleSubmit, handleChange, handleBlur }) => (
        
        <div className="login-container"  onSubmit={handleSubmit}>
          <div className="login-info-container">
            
            <img  className="title1" src='https://res.cloudinary.com/vrilli/image/upload/v1647823389/image_1_k6srbi.png' alt='' />
            <h1 className="title"> anime<span className="spa">yabu.</span> </h1>
          
            <form className="inputs-container">
               
               <img  className="img-login" src='https://res.cloudinary.com/vrilli/image/upload/v1647824821/pack2779_2_l9qor8.png' alt='' /><br/>
               <img className="img-login2" src="https://res.cloudinary.com/vrilli/image/upload/v1647825485/ひさしぶり_vaaq3u.png" alt="" /> <br/>
               <h2 className="text1">¡Hola, te extrañamos!</h2> <br/>


                <h3 className="letra">Email</h3>
                <input className="input1" type="text"  name="email" placeholder="Email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                <h3 className="letra">Contraseña</h3>

                <input className="input" type="password" name="password" placeholder="password" onChange={handleChange} value={values.password} />
                <h3 className="olvido">¿Olvido la contraseña?</h3>


                <button type='buttom' className="boton" onClick={() => iniciarSesion(values)}>Acceder</button><br/>

                <h1 className="title2"> Ingresar tambien con </h1>
                
             <div className="social-login">
            <button className="faceboo"><Icon icon="akar-icons:facebook-fill" onClick={() => {
              dispatch(loginFacebook())
            }} /></button>
            <button className="googl"><Icon icon="ant-design:google-plus-outlined" onClick={() => {
              dispatch(loginGoogle())
            }} /></button>
            </div>
            <Button className="ini" type='button' as={Link} to="/Registro" variant="primar"> <span className="span">¿Quieres registrarte? </span><span className="spa">Registrate.</span> </Button>
            </form>
          </div>
            
           <div className="container">
                <Carrusel />
                <img src="https://res.cloudinary.com/vrilli/image/upload/v1647836263/Ellipse_2_lotwn2.png" alt="" />
            </div>
           
         </div>
      )}
    </Formik>

  </>
  );
};

export default FormLogin;


