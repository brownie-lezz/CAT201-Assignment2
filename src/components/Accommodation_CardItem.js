import React from 'react';
import './Accommodation_CardItem';
import {Link} from 'react-router-dom';

function Accommodation_CardItem(props){
    return(
        <>
            <li className ='cards-item'>
                <Link className='cards-item-link' to = {props.path}>
                    <figure className='cards-item-pic-wrap' data-category={props.label}>
                        <img className='cards-item-img' alt='Accommodation CardItem' src={props.src} />
                    </figure>
                    <div className='cards-item-info'>
                        <h5 className='cards-item-text'>{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default Accommodation_CardItem;