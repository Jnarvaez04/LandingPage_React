import './App.css';
import { NavbarApp } from './components/Navbar/NavbarApp';
import { SliderApp } from './components/Slider/SliderApp';
import {InfoApp} from './components/Informacion/InfoApp';
import { CardsApp } from './components/Cards/CardsApp';


function App() {
  return (
    <>
      <NavbarApp/>
      <SliderApp/>
      <InfoApp/>
      <CardsApp/>
    </>
  );
}

export default App;
