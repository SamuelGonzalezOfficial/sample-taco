import "./Story.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import story from "../../assets/images/story.png";

function Story() {
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
    <section class="section-container" id="story">
      <div class="section-content">
        <div class="box">
          <div class="box-info" data-aos="fade-right">
            <h3 class="box-title">Nuestra historia empieza con una receta</h3>
            <p class="box-text">
              Este restaurante nació en 2017 como un pequeño local familiar en
              una esquina del barrio, impulsado por una receta heredada y el
              deseo de compartir lo mejor de la cocina mexicana. Lo que comenzó
              con unos pocos ingredientes y una parrilla modesta, creció gracias
              al cariño de nuestros primeros clientes, quienes con cada visita
              nos animaron a seguir perfeccionando sabores y experiencias. Hoy
              seguimos cocinando con la misma pasión, manteniendo vivo el
              espíritu casero y auténtico que nos trajo hasta aquí.
            </p>
            <button class="box-button" onClick={(e) => handleSmoothScroll(e, "#services")}>Saber m&aacute;s</button>
          </div>
          <div class="box-image" data-aos="fade-left">
            <img src={story} alt="Image" class="box-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export { Story };
