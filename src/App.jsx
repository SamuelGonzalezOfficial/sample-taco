//Styles
import './assets/styles/global.css'

//Components
import { Hero } from "./features/Hero/Hero";
import { Testimonials } from './features/Testimonials/Testimonials';
import { About } from './features/About/About';
import { Story } from './features/Story/Story';
import { Services } from './features/Services/Services';

function App() {
  return (
    <>
      <Hero />
      <Testimonials />
      <About />
      <Story />
      <Services />
    </>
  );
}

export default App;
