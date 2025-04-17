import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../Assets/image1.jpg';
import image2 from '../Assets/image2.jpg';
import image3 from '../Assets/image3.jpg';

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
    </div>
  );
};

export default Home;
