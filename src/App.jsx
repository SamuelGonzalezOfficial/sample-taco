//Styles
import './assets/styles/global.css'

//Components
import { Hero } from "./features/Hero/Hero";
import { Testimonials } from './features/Testimonials/Testimonials';

function App() {
  return (
    <>
      <Hero />
      <Testimonials />
    </>
  );
}

export default App;
