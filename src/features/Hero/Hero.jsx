import "./Hero.css";

//Img
import tacos from "../../assets/images/tacos-hero.png";

function Hero() {
  return (
    <section class="banner-container">
      <div class="banner-content">
        <div class="banner-text">
          <h1 class="banner-title">Creative headline and very awesome</h1>
          <h2 class="banner-subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            alias ex aperiam exercitationem natus quidem sit excepturi, fuga
            veniam deserunt.
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
