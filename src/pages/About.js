import React from 'react';
import image1 from '../Assets/image1.jpg'; // Replace with your image path

const About = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">About This Project</h2>
        <p className="text-muted">Making car service appointments easier and more efficient.</p>
      </div>

      <div className="row">
        {/* Left Side */}
        <div className="col-md-6">
          <img 
            src={image1} // Replace with your image path" 
            alt="Car Service"
            className="img-fluid rounded shadow-sm"
          />
        </div>

        {/* Right Side */}
        <div className="col-md-6 d-flex align-items-center">
          <div>
            <p>
              The **Car Service Appointment Booking System** is designed to simplify the way customers schedule 
              their car maintenance and repairs. Our goal is to provide a **seamless online booking experience** 
              that allows users to schedule appointments at their convenience.
            </p>
            <p>
              With this platform, customers can select services, choose available time slots, and receive confirmations, 
              all within a few clicks. Our system ensures that **service providers can manage their schedules effectively**, 
              leading to improved efficiency and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
