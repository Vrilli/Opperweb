import React from "react";
import "../styles/Carrusel.css";


const Carrusel = () => {
  return (
    <div className="contenedor">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://res.cloudinary.com/vrilli/image/upload/v1647841449/imagen1_axcm6f.png" className="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h1>anime<span className="spa5">yabu.</span>.</h1>
              <p>
                Ver anime en línea en HD, subtitulado o doblado, en tu celular o
                computadora. ¡Animeyabu, tu portal de anime en línea!
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://res.cloudinary.com/vrilli/image/upload/v1647841460/imagen2_rvaz8j.png" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>anime<span className="spa5">Kyojuro.</span></h1>
              <p>
                Ver anime en línea en HD, subtitulado o doblado, en tu celular o
                computadora. ¡Animeyabu, tu portal de anime en línea!
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://res.cloudinary.com/vrilli/image/upload/v1647841492/imagen3_sp27tt.png" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>anime<span className="spa5">Inosuke.</span>.</h1>
              <p>
                Ver anime en línea en HD, subtitulado o doblado, en tu celular o
                computadora. ¡Animeyabu, tu portal de anime en línea!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrusel;
