import React, { useState } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CerrarSesion, useAuth } from '../firebaseConfig'




const Crear = () => {
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
        <div>
            <div className='Navb'>
                <Navbar>
                    <Container>
                        <Navbar.Brand id='usuariolog'><img src="https://img.icons8.com/external-bearicons-flat-bearicons/64/000000/external-user-essential-collection-bearicons-flat-bearicons.png" alt="" />   <div><h4><b>Bienvenido:</b></h4> {currentUser?.displayName} </div>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Link to='/login'>
                            <button className='bot' onClick={handleCerrarSesion} disabled={loading || !currentUser} variant="secondary">Cerrar Sesión</button>{' '}
                        </Link>
                    </Container>
                </Navbar>
            </div>
            <div>
            </div>
           

            <h2 className="title3">¡Hola, Boba!</h2>
            


           
        </div >
    )
}

export default Crear