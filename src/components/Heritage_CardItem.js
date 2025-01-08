import React from 'react';
import './Heritage_Cards.css';

function Heritage_CardItem(props) {
  return (
    <>
      <li className="cards-item">
        <a
          className="cards-item-link"
          href={props.path} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <figure className="cards-item-pic-wrap" data-category={props.label}>
            <img
              className="cards-item-img"
              alt="Heritage Image"
              src={props.src}
            />
          </figure>
          <div className="cards-item-info">
            <h5 className="cards-item-text">{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default Heritage_CardItem;
