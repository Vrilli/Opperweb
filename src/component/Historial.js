import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CerrarSesion, useAuth } from "../firebaseConfig";
import "../styles/Historial.css";

const Historial = () => {
  

  const [loading, setloading] = useState(false);

  async function handleCerrarSesion() {
    setloading(true);
    try {
      await CerrarSesion();
    } catch {
      alert("error!");
    }
    setloading(false);
  }

  const currentUser = useAuth();

  return (
    <div className="conten">
      <div className="izquierda">
        <img
          className="title1"
          src="https://res.cloudinary.com/vrilli/image/upload/v1647823389/image_1_k6srbi.png"
          alt=""
        />
        <h1 className="title">
          anime<span className="spa">yabu.</span>{" "}
        </h1> <br /> <br /><br /><br /> <br /><br />

        <h2 className="title3">Categorias</h2>
        <ul>
          <li>Ver todos</li>
          <li>Crear</li>
        </ul>
        <br />
        <br />
        <Link to="/login">
          <button
            className="btn"
            onClick={handleCerrarSesion}
            disabled={loading || !currentUser}
          >
            Cerrar Sesión
          </button>{" "}
        </Link>
      </div>

      <div className="derecha">
        <h1 className="title8">Lista de categorías</h1>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">ACCIÓN</h3>
                <p className="card-text">
                 Editar
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">AVENTURA</h3>
                <p className="card-text">
                  Editar 
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">COMEDIA</h3>
                <p class="card-text">
                 Editar
                </p>
              </div>
            </div>
          </div>
          </div>
           
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">TERROR</h3>
                  <p className="card-text">
                   Editar
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">ROMANCE</h3>
                  <p className="card-text">
                   Editar
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">MISTERIO</h3>
                  <p className="card-text">
                   Editar
                  </p>
                </div>
              </div>
              </div>
              </div>
        </div>
      

      
    </div>
  );
};

export default Historial;
