import React from 'react';

const Contact = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Contact Us</h2>
        <p className="text-muted">We’d love to hear from you. Reach us through the form below or visit our location.</p>
      </div>

      <div className="row">
        {/* Contact Form */}
        <div className="col-md-6 mb-4">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="your@email.com" />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Your message..."></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>

        {/* Google Map */}
        <div className="col-md-6">
          <div className="ratio ratio-4x3">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.45248736055!2d36.81468485799215!3d-1.2987160217782395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10e714eef015%3A0x86e279ab6dfb45e9!2sUpper%20Hill%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1617038941503!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
