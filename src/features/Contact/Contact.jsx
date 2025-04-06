import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section class="contact-container">
      <div class="contact-content">
        <div class="contact-image" data-aos="fade-right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15007931.799567098!2d-111.65577484275282!3d23.28414753193624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84043a3b88685353%3A0xed64b4be6b099811!2zTcOpeGljbw!5e0!3m2!1ses-419!2smx!4v1718401479097!5m2!1ses-419!2smx"
            class="contact-img"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación del restaurante"
          ></iframe>
        </div>
        <div class="contact-box" data-aos="fade-left">
          <div class="contact-header">
            <h2 class="contact-title">Dejanos tus comentarios</h2>
            <p class="contact-subtitle">
              Déjanos tu mensaje o consulta y te responderemos lo antes posible.
              Ya sea para pedidos, reservas o eventos, estamos aquí para
              ayudarte.
            </p>
          </div>

          <form action="#" class="form">
            <input
              type="text"
              name="name"
              id="name"
              class="form-input"
              placeholder="name"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              class="form-input"
              placeholder="e-mail"
              required
            />
            <textarea
              type="text"
              name="message"
              id="message"
              class="form-input form-message"
              placeholder="message"
              required
            ></textarea>

            <button class="form-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export { Contact };
