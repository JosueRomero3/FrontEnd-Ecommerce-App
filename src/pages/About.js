import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus mt-5">
        <div className="col-md-6 mt-5 w-5">
          <img
            src="/images/LaTienditaEcommerce.png"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4 text-center">
          <h1 className="text-center"> Nosotros</h1>
          <p className="text-justify mt-2">
         
¡Bienvenido a www.laTiendita.com tu principal portal de internet para compras de artículos LaTiendita®! Ofrecemos la más amplia selección y variedad a los mejores precios en la puerta de tu casa. Es una tienda online de fácil y rápido acceso, está diseñada para hacer de tu compra la mejor experiencia. Visítanos con frecuencia para que no te pierdas las diferentes ofertas y los nuevos productos que estamos continuamente lanzando.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
