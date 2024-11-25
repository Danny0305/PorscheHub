import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // to include the styles
import Card from './carCard';
import Cars from "./carDetails";
import "../styles/components/ModelSection.css";

const Models = () => {

  useEffect(() => {
    AOS.init({
      easing:"linear",
      duration: 1000, // animation duration
      once: false, // whether animation should happen only once
    });
  }, []); // empty dependency array to ensure it runs only on mount

  const CreateCard = (car) => {
    return (
      <Card 
        key={car.id}
        model={car.name}
        type={car.types}
        image={car.image}
        description={car.description}
        price={car.price}
      />
    );
  };

  return (
    <div className="models">
      <h2 className="model-heading">Models</h2>
      <div className="grid-container">
        <div className="model-grid" data-aos="fade-up">
          {Cars.map(CreateCard)}
        </div>
      </div>
    </div>
  );
};

export default Models;
