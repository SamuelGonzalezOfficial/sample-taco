import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import about from "../../assets/images/about.png";

function About() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section class="section-container">
      <div class="section-content">
        <div class="box">
          <div class="box-image" data-aos="fade-right">
            <img src={about} alt="Image" class="box-img" />
          </div>
          <div class="box-info" data-aos="fade-left">
            <h3 class="box-title">
              Verdadera pasión por la cocina mexicana 🌮
            </h3>
            <p class="box-text">
              Nosotros creemos que la comida es una forma de conectar culturas,
              recuerdos y emociones. Somos un restaurante familiar inspirado en
              las raíces auténticas de la gastronomía mexicana, donde cada plato
              se prepara con ingredientes frescos, recetas tradicionales y un
              toque casero que se nota desde el primer bocado. Nuestro
              compromiso es ofrecer una experiencia culinaria cálida, cercana y
              llena de sabor, sin importar si nos visitas por primera vez o si
              ya eres parte de nuestra comunidad.
            </p>
            <button class="box-button" onClick={(e) => handleSmoothScroll(e, "#story")}>Saber m&aacute;s</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export { About };
