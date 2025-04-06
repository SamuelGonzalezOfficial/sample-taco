import "./Services.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

//Icons
import food from "../../assets/images/food.png";
import delivery from "../../assets/images/scooter.png";
import discount from "../../assets/images/discount.png";

function Services() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="services-container" id="services">
      <div className="services-content">
        <div className="services-box" data-aos="fade-up">
          <div className="services-card">
            <div className="services-card-icon">
              <img src={food} alt="" className="services-card-img" />
            </div>
            <p className="services-card-title">Platos Tradicionales</p>
            <p className="services-card-description">
              Recetas mexicanas auténticas, preparadas con ingredientes frescos
              y el sabor casero que nos representa.
            </p>
          </div>
          <div className="services-card">
            <div className="services-card-icon">
              <img src={delivery} alt="" className="services-card-img" />
            </div>
            <p className="services-card-title">Envíos a Domicilio</p>
            <p className="services-card-description">
              Haz tu pedido y recibe nuestros platos en la comodidad de tu casa,
              rápido, caliente y con el mismo sabor de siempre.
            </p>
          </div>
          <div className="services-card">
            <div className="services-card-icon">
              <img src={discount} alt="" className="services-card-img" />
            </div>
            <p className="services-card-title">Promos especiales</p>
            <p className="services-card-description">
              Disfruta descuentos y combos únicos cada semana. Ideal para probar
              algo nuevo o compartir sin gastar de más.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Services };
