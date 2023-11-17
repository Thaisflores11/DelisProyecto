import React from 'react';
import TarjetaRecomendacion from './TarjetaRecomendacion';
import { recomendaciones } from "../assets/ApiRecomendacion";
import '/styles/Recomendacion.css'; 

const Recomendacion = () => {
  return (
    <section className="recomendacion-section">
      <h2>Recomendación</h2>
      <div className="tarjeta-container">
        {recomendaciones.map((recomendacion, index) => (
          <TarjetaRecomendacion
            key={index}
            title={recomendacion.title}
            imgUrl={recomendacion.imgUrl}
            precio={recomendacion.precio}
          />
        ))}
      </div>
    </section>
  );
};

export default Recomendacion;
