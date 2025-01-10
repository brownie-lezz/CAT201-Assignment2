import React, { useState, useEffect } from 'react';
import './Food_Sliders.css';


  const foodItems = [
    {
      image: 'images/food-1.jpg',
      title: 'Char Kway Teow',
      description: 'A beloved Penang dish, stir-fried flat rice noodles with prawns, egg, and cockles.',
    },
    {
      image: 'images/food-2.jpg',
      title: 'Penang Laksa',
      description: 'A spicy noodle soup with a tangy, sour broth made from tamarind, fish, and a blend of aromatic spices like lemongrass and galangal.',
    },
    {
      image: 'images/food-3.jpg',
      title: 'Nasi Kandar',
      description: 'A hearty meal of rice with a variety of rich and flavorful curries.',
    },
    {
      image: 'images/food-4.jpg',
      title: 'Cendol',
      description: 'Cendol is an iced sweet dessert that contains pandan-flavoured green rice flour jelly, coconut milk, and palm sugar syrup',
    },
    {
      image: 'images/food-5.jpg',
      title: 'Ai Yi Bing',
      description: "Ai Yi Bing (爱意冰) is a refreshing Chinese dessert made of finely shaved ice topped with colorful fresh fruits like mango, watermelon, and lychee, and drizzled with condensed milk or syrup for a sweet, creamy finish. It's a perfect, light treat for hot days.",
    },
    {
      image: 'images/food-6.jpg',
      title: 'Ice Kacang',
      description: "Ice kachang (Malay for “nut” or “bean”) contains jellies, red beans and attap chee (seeds of the nipah palm), covered with a mound of shaved ice that is doused with colourful syrups and evaporated milk, and topped with creamed corn.",
    },
    {
      image: 'images/food-7.jpg',
      title: 'Penang Hokkien Mee',
      description: "A flavorful noodle soup made with a rich, prawn-based broth, served with noodles, prawns, pork, and hard-boiled eggs, often garnished with fried shallots and chili paste.",
    },
    {
      image: 'images/food-8.jpg',
      title: 'Char Koay Kak',
      description: "Stir-fried radish cake with eggs, prawns, bean sprouts, and chives, served with a savory soy-based sauce, making it a delicious Penang street food.",
    },
    {
      image: 'images/food-9.jpg',
      title: 'Hainanese Chicken Rice',
      description: "Hainanese Chicken Rice in Penang features tender, poached chicken served with fragrant rice cooked in chicken fat, accompanied by a variety of flavorful condiments such as chili sauce, ginger paste, and soy sauce.",
    },
    {
      image: 'images/food-10.jpg',
      title: 'Roti Bakar and Teh Tarik',
      description: " Roti Bakar and Teh Tarik is a popular Malaysian breakfast combo. Roti Bakar features toasted bread, often spread with kaya (a sweet coconut jam) and butter, paired with Teh Tarik, a strong, sweet tea made by pulling the tea between two containers, giving it a frothy and rich flavor.",
    },
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
      <section id="food" div className="food-slider-container">
        <div className="food-description">
          <h1>Food and Beverages</h1>
          <p>Penang is a food paradise, offering a diverse array of dishes that reflect its rich cultural heritage.</p>
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
      </section>
    );
  }
  
  export default FoodSlider;