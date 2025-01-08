import React from 'react';
import './Heritage_Cards.css';
import Heritage_CardItem from './Heritage_CardItem';

function Heritage_Cards() {
  return (
    <section id="heritage" className="cards-heritage">
      <h1>Culture and Heritage</h1>
      <p>
        Penang’s culture and heritage are a vibrant blend of Malay, Chinese, Indian, and European influences, best showcased in George Town, a UNESCO World Heritage Site.
      </p>

      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/UsPvJ78Sa40"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <Heritage_CardItem
              src="images/image-2.jpg"
              text="Little Children on Bicycle Street Art"
              label="Heritage"
              path="https://maps.app.goo.gl/Z9deu6XyyAFBMnbM8"
            />
            <Heritage_CardItem
              src="images/image-3.png"
              text="Jalan Kek Chuan"
              label="Heritage"
              path="https://maps.app.goo.gl/sKQsNH7ob7du9BaT9"
            />
            <Heritage_CardItem
              src="images/image-4.jpg"
              text="Kek Lok Si Temple"
              label="Temple"
              path="https://maps.app.goo.gl/zpuRxW6EqrBPsfr46"
            />
            <Heritage_CardItem
              src="images/image-5.jpeg"
              text="Penang Hill"
              label="Heritage"
              path="https://maps.app.goo.gl/r8KKHgP2MoiFLvn78"
            />
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Heritage_Cards;
