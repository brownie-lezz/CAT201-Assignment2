import React, { useState, useEffect } from 'react';
import './Food_Sliders.css';


  const foodItems = [
    {
      image: 'images/nature-6.jpg',
      title: 'Penang National Park',
      description: 'Penang National Park offers a tranquil escape with lush rainforests, pristine beaches, and diverse wildlife.',
    },
    {
      image: 'images/nature-7.jpg',
      title: 'Entopia by Penang Butterfly Farm',
      description: 'Entopia by Penang Butterfly Farm is home to thousands of butterflies and other insects, providing an immersive experience in a tropical rainforest.',
    },
    {
      image: 'images/nature-8.jpg',
      title: 'Penang Bird Park',
      description: 'Discover over 300 species of birds from around the world, in a lush environment that offers an educational experience for nature lovers.',
    },
    {
      image: 'images/nature-9.jpg',
      title: 'Batu Ferringhi',
      description: 'Famous for its tropical beach, this area offers stunning views of the coastline, lush forests, and outdoor adventures.',
    }
  ];

  function FoodSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Automatically slide to the next image every 5 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % foodItems.length);
      }, 8000);
  
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);
  
    const goToPrevious = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + foodItems.length) % foodItems.length);
    };
  
    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % foodItems.length);
    };
  
    return (
      <div className="nature-slider-container">
        <div className="nature-description">
          <h1>Nature and Wildlife</h1>
          <p>Penang's Nature & Wildlife offers a diverse range of experiences, from exploring lush rainforests to discovering the stunning flora and fauna at various nature parks.</p>
        </div>
        <div className="slider">
          <button className="slider-button prev" onClick={goToPrevious}>
            ❮
          </button>
          <div className="slider-content">
            <div className="slider-image">
              <img src={foodItems[currentIndex].image} alt={foodItems[currentIndex].title} />
            </div>
            <div className="slider-text">
              <h3>{foodItems[currentIndex].title}</h3>
              <p>{foodItems[currentIndex].description}</p>
            </div>
          </div>
          <button className="slider-button next" onClick={goToNext}>
            ❯
          </button>
        </div>
      </div>
    );
  }
  
  export default FoodSlider;