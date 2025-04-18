import "./Testimonials.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="testimonials-container" id="testimonials">
      <div className="testimonials-content">
        <div className="testimonials-cards" data-aos="fade-up">
          <div className="testimonials-card">
            <span className="testimonials-card-name">John Doe</span>
            <div className="testimonials-card-review">
              <i class="fa-solid fa-star testimonials-card-star"></i>
              <i class="fa-solid fa-star testimonials-card-star"></i>
              <i class="fa-solid fa-star testimonials-card-star"></i>
              <i class="fa-solid fa-star testimonials-card-star"></i>
              <i class="fa-solid fa-star testimonials-card-star"></i>
            </div>
            “Excelente atención desde que llegamos. La comida superó nuestras
            expectativas y el ambiente fue perfecto. Sin duda, una experiencia
            que volveríamos a repetir sin pensarlo.”
          </div>
          <div className="testimonials-card">
            <span className="testimonials-card-name">Ana Doe</span>
            <div className="testimonials-card-review">
              <i class="fa-solid fa-star testimonials-card-star"></i>
              <i class="fa-solid fa-star testimonials-card-star"></i>
              <i class="fa-solid fa-star testimonials-card-star"></i>
              <i class="fa-solid fa-star testimonials-card-star"></i>
              <i class="fa-solid fa-star testimonials-card-star"></i>
            </div>
            “Fuimos en familia a celebrar el cumpleaños de mi hija y fue
            inolvidable. Decoraron la mesa, el personal fue muy atento y todos
            quedamos encantados con el servicio.”
          </div>
        </div>
      </div>
    </section>
  );
}

export { Testimonials };
