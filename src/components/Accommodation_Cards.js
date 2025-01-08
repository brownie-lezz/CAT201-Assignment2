import React from 'react';
import './Accommodation_Cards.css';
import Accommodation_CardItem from './Accommodation_CardItem';

function Accommodation_Cards() {
    return (
        <section id="accommodations" className='cards-accommodation'>
            <h1>Accommodation</h1>
            <p>Hotels in Penang not only allow you to experience the Belt South Seas, but also enjoy tropical island time!</p>
            <div className='cards-container'>
                <div className='cards-wrapper'>
                    <ul className='cards-items'>
                        <Accommodation_CardItem
                            src='images/hotel1.jpg'
                            text='Eastern & Oriental Hotel'
                            label='Hotel'
                            path='https://www.eohotels.com/'
                        />
                        <Accommodation_CardItem
                            src='images/hotel2.jpg'
                            text='PARKROYAL Penang Resort'
                            label='Resort'
                            path='https://www.panpacific.com/en/hotels-and-resorts/pr-penang.html'
                        />
                        <Accommodation_CardItem
                            src='images/hotel3.jpg'
                            text='Shangri-La Rasa Sayang'
                            label='Hotel'
                            path='https://www.shangri-la.com/penang/rasasayangresort/'
                        />
                        <Accommodation_CardItem
                            src='images/hotel4.jpg'
                            text='The George'
                            label='Hotel'
                            path='https://thegeorge.com.my/'
                        />
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Accommodation_Cards;
