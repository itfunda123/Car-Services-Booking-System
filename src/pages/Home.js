import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../Assets/image1.jpg';
import image2 from '../Assets/image2.jpg';
import image3 from '../Assets/image3.jpg';
// ...logos
import logo1 from '../Assets/audi.jpeg';
import logo2 from '../Assets/Bmw.jpeg';
import logo3 from '../Assets/vw.png';
import logo4 from '../Assets/subaru.jpeg';
import logo5 from '../Assets/toyota.jpeg';
import logo6 from '../Assets/tesla.jpeg';
import logo7 from '../Assets/peugeot.png';
import logo8 from '../Assets/mazda.jpeg';
import logo9 from '../Assets/ford.jpeg';
import logo10 from '../Assets/ferrari.jpeg';

const Home = () => {
  return (
    <div className="home-page">
      {/* Full-width Carousel */}
      <Carousel fade className="carousel-fullscreen">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Professional Car Services</h3>
            <p>We take care of your car like it's our own.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Expert Mechanics</h3>
            <p>Trained professionals ready to help you.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Quick & Reliable</h3>
            <p>Book an appointment online with ease.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Content */}
      <div className="mt-4 text-center px-3">
        <h2>Welcome to Our Car Service Booking Platform</h2>
        <p>Book your car service appointment quickly and easily!</p>
      </div>

      {/* Car Logos */}
      <div className="d-flex justify-content-center mt-4 flex-wrap">
        {[logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10].map((logo, index) => (
          <img key={index} src={logo} alt="Car Logo" style={{ width: '60px', margin: '10px' }} />
        ))}
      </div>
    </div>
  );
};

export default Home;
