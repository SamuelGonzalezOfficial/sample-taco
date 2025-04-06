//Styles
import './assets/styles/global.css'

//Components
import { Hero } from "./features/Hero/Hero";
import { Testimonials } from './features/Testimonials/Testimonials';
import { About } from './features/About/About';

function App() {
  return (
    <>
      <Hero />
      <Testimonials />
      <About />
    </>
  );
}

export default App;
