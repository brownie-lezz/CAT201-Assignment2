import React from 'react';
import './Accommodation_Cards.css';
import Accommodation_CardItem from './Accommodation_CardItem';

function Accommodation_Cards(){
    return(
        <div className='cards'>
            <h1>Accommodation and Hotels</h1>
            <p>Hotels in Penang not only allow you to experience the Belt South Seas, but also enjoy tropical island time!</p>
            <div className='cards-container'>
                <div className='cards-wrapper'>
                    <ul className='cards-items'>
                        <Accommodation_CardItem
                            src='images/hotel1.jpg'
                            text='Eastern & Oriental Hotel'
                            label='Hotel'
                        />
                        <Accommodation_CardItem
                            src='images/hotel2.jpg'
                            text='PARKROYAL Penang Resort'
                            label='Resort'
                        />
                        <Accommodation_CardItem
                            src='images/hotel3.jpg'
                            text='Shangri-La Rasa Sayang'
                            label='Hotel'
                        />
                        <Accommodation_CardItem
                            src='images/hotel4.jpg'
                            text='The George'
                            label='Hotel'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Accommodation_Cards;