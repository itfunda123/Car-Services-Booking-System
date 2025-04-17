import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../Assets/image1.jpg';
import image2 from '../Assets/image1.jpg';
import image3 from '../Assets/image1.jpg';
import logo1 from '../Assets/audi.jpeg'; // Import the car logo
import logo2 from '../Assets/Bmw.jpeg';
import logo3 from '../Assets/vw.png';
import logo4 from '../Assets/subaru.jpeg'; // Import the car logo
import logo5 from '../Assets/toyota.jpeg';
import logo6 from '../Assets/tesla.jpeg' // Import the car logo
import logo7 from '../Assets/peugeot.png'; // Import the car logo
import logo8 from '../Assets/mazda.jpeg'; // Import the car logo
import logo9 from '../Assets/ford.jpeg'; // Import the car logo
import logo10 from '../Assets/ferrari.jpeg'; // Import the car logo

const Home = () => {
  return (
    <div className="py-4">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
            style={{ height: '500px', objectFit: 'cover' }}
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
            style={{ height: '500px', objectFit: 'cover' }}
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
            style={{ height: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Quick & Reliable</h3>
            <p>Book an appointment online with ease.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="mt-4 text-center">
        <h2>Welcome to Our Car Service Booking Platform</h2>
        <p>Book your car service appointment quickly and easily!</p>
      </div>

      {/* Car logos section - Same logo for all images */}
      <div className="d-flex justify-content-center mt-4">
        <img src={logo1} alt="Car Logo" style={{ width: '60px', margin: '0 10px' }} />
        <img src={logo2} alt="Car Logo" style={{ width: '60px', margin: '0 10px' }} />
        <img src={logo3} alt="Car Logo" style={{ width: '60px', margin: '0 10px' }} />
        <img src={logo4} alt="Car Logo" style={{ width: '60px', margin: '0 10px' }} />
        <img src={logo5} alt="Car Logo" style={{ width: '60px', margin: '0 10px' }} />
        <img src={logo6} alt="Car Logo" style={{ width: '60px', margin: '0 10px' }} />
        <img src={logo7} alt="Car Logo" style={{ width: '60px', margin: '0 10px' }} />
        <img src={logo8} alt="Car Logo" style={{ width: '60px', margin: '0 10px' }} />
        <img src={logo9} alt="Car Logo" style={{ width: '60px', margin: '0 10px' }} />
        <img src={logo10} alt="Car Logo" style={{ width: '60px', margin: '0 10px' }} />
      </div>
    </div>
  );
};

export default Home;
