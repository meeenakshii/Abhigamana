import React from 'react';
import { useNavigate } from "react-router-dom";
import './Home.css';
import image1 from './images/child-adoption.png';
import image2 from './images/Old-Age-Home-870x600.jpg';
import image3 from './images/photo_2025-02-11_11-31-59.jpg';
import image4 from './images/donations.jpg';
import image5 from './images/small.jpg';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="row">
        <div className="circleContainer">
          <button className="circleButton" onClick={() => navigate("/adoption")}>
            <img src={image1} alt="Button 1" className="buttonImage" />
          </button>
          <h3>Adoption</h3>
        </div>

        <div className="circleContainer">
          <button className="circleButton" onClick={() => navigate("/Old_age_home")}>
            <img src={image2} alt="Button 2" className="buttonImage" />
          </button>
          <h3>Old Age Home</h3>
        </div>
        <div className="circleContainer">
          
        <button className="circleButton" onClick={() => navigate("/Home_nurse")}>
            <img src={image3} alt="Button 3" className="buttonImage" />
          </button>
          <h3>Home Nurse</h3>
        </div>
      </div>
      <div className="row">
        <div className="circleContainer">
          
        <button className="circleButton" onClick={() => navigate("/Donations")}>
            <img src={image4} alt="Button 4" className="buttonImage" />
          </button>
          <h3>Donations</h3>
        </div>
        <div className="circleContainer">
          
        <button className="circleButton" onClick={() => navigate("/shop_here")}>
            <img src={image5} alt="Button 5" className="buttonImage" />
          </button>
          <h3>Shop Here</h3>
        </div>
      </div>

      {/* About Us Section */}
      <div className="about-us">
        <h2>About Us</h2>
        <p>
          Welcome to our platform! We are dedicated to providing support and resources for those in need. 
          Whether it's helping children find loving homes, supporting the elderly, offering home nursing 
          services, or facilitating donations, we are committed to making a difference. 
        </p>
        <p>
          Join us in our mission to create a compassionate and supportive community. Together, we can 
          make the world a better place for everyone.
        </p>
      </div>
    </div>
  );
};

export default Home;
