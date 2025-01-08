import React from 'react';
import '../../App.css';
import MainSection from '../MainSection';
import Heritage_Cards from '../Heritage_Cards';
import FoodSlider from '../Food_Sliders';
import Accommodation_Cards from "../Accommodation_Cards";
import Footer from '../Footer';
import Nature_Sliders from '../Nature_Sliders';

function Home() {
  return (
    <>
      <MainSection />
      <FoodSlider />
      <Nature_Sliders />
      <Heritage_Cards />
      <Accommodation_Cards />
      <Footer />
    </>
  );
}

export default Home;