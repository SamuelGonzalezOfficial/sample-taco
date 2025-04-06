import "./Hero.css";

//Img
import tacos from "../../assets/images/tacos-hero.png";

function Hero() {
  return (
    <section class="banner-container">
      <div class="banner-content">
        <div class="banner-text">
          <h1 class="banner-title">
            Sabor mexicano aut&eacute;ntico para tu paladar
          </h1>
          <h2 class="banner-subtitle">
            Disfruta tacos, burritos y más, hechos con recetas tradicionales y
            un toque casero. Servimos con pasión y picante desde 2017.
          </h2>
          <button class="banner-button">Show More</button>
        </div>
      </div>
      <div className="banner-image">
        <img src={tacos} alt="" className="banner-img" />
      </div>
    </section>
  );
}

export { Hero };
