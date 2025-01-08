import React from 'react';
import './Heritage_Cards.css';
import {Link} from 'react-router-dom';

function Heritage_CardItem(props){
  return(
    <>    
      <li className ='cards-item'>
        <Link className='cards-item-link' to = {props.path}>
          <figure className='cards-item-pic-wrap' data-category={props.label}>
            <img className='cards-item-img' alt='Heritage Image' src={props.src} />
          </figure>
          <div className='cards-item-info'>
            <h5 className='cards-item-text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Heritage_CardItem;