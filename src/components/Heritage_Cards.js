import React from 'react';
import './Heritage_Cards.css';
import Heritage_CardItem from './Heritage_CardItem';

function Heritage_Cards(){
  return(
    <div className='cards'>
      <h1>Culture and Heritage</h1>
      <div className='cards-container'>
        <div className='cards-wrapper'>
          <ul className='cards-items'>
            <Heritage_CardItem
                src='images/image-2.jpg'
                text='Little Children on Bicycle Street Art'
                label='Heritage'
              />
            <Heritage_CardItem
              src='images/image-3.png'
              text='Jalan Kek Chuan'
              label='Heritage'
            />
            <Heritage_CardItem
                src='images/image-4.jpg'
                text='Kek Lok Si Temple'
                label='Heritage'
              />
            <Heritage_CardItem
              src='images/image-5.jpeg'
              text='Penang Hill'
              label='Heritage'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Heritage_Cards;