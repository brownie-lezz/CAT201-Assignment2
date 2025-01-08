import React from 'react';
import './Accommodation_CardItem';
import { Link } from 'react-router-dom';

function Accommodation_CardItem(props) {
    return (
        <>
            <li className='cards-item'>
                <a 
                    className='cards-item-link' 
                    href={props.path} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <figure className='cards-item-pic-wrap-hotel' data-category={props.label}>
                        <img className='cards-item-img' alt='Accommodation CardItem' src={props.src} />
                    </figure>
                    <div className='cards-item-info'>
                        <h5 className='cards-item-text'>{props.text}</h5>
                    </div>
                </a>
            </li>
        </>
    );
}

export default Accommodation_CardItem;
