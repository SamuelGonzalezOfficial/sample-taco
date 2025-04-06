import "./Hero.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

//Img
import tacos from "../../assets/images/tacos-hero.png";

function Hero() {
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
    <section class="banner-container">
      <div class="banner-content">
        <div class="banner-text">
          <h1 class="banner-title" data-aos="fade-right">
            Sabor mexicano aut&eacute;ntico para tu paladar
          </h1>
          <h2
            class="banner-subtitle"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Disfruta tacos, burritos y más, hechos con recetas tradicionales y
            un toque casero. Servimos con pasión y picante desde 2017.
          </h2>
          <div
            className="banner-button-container"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <button class="banner-button" onClick={(e) => handleSmoothScroll(e, "#testimonials")}>Saber m&aacute;s</button>
          </div>
        </div>
      </div>
      <div className="banner-image" data-aos="fade-left">
        <img src={tacos} alt="" className="banner-img" />
      </div>
    </section>
  );
}

export { Hero };
