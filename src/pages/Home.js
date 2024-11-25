import React from 'react';
import Header from "../components/Header";
import ModelSection from "../components/ModelSection";
import Footer from "../components/Footer";
import '../styles/Home.css';

const HomePage = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <Header />
        <div className="hero-content">
            <h2 className="slogan text">Where Luxury Meets <br/>Performance</h2>
            <button className="discover-button text">The New 911 GT3</button>        
        </div>
      </div>
      <ModelSection />
      <Footer />
    </div>
  );
}

export default HomePage;