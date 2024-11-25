import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/components/card.css"

const Card = (props) => {
  return (
    <div className="card" style={{
      backgroundImage: `url(${props.image})`,
    }}>
      <div className="card-body">
        <div className="card-top">
          <h5 className="car-model">{props.model}</h5>
          {props.type.map((carType, index) => (
            <p key={index} className="car-type">{carType}</p>
          ))}
        </div>
        <div className="card-bottom">
          <p className="car-description">{props.description}</p>
          <p className="car-price">From ${props.price} *</p>
          <Link to={`/models/${props.model}`}>
            <button className="models-button">Explore the {props.model}</button>
          </Link>
        </div>        
      </div>
    </div>
  );
}

export default Card;