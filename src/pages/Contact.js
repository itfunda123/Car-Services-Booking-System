import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formRef.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setStatus('Message sent successfully!');
      formRef.current.reset();
    })
    .catch((error) => {
      console.error(error.text);
      setStatus('Failed to send message.');
    });
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Contact Us</h2>
        <p className="text-muted">We’d love to hear from you. Reach us through the form below or visit our location.</p>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <form ref={formRef} onSubmit={sendEmail}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" name="email" className="form-control" id="email" placeholder="your@email.com" required />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea name="message" className="form-control" id="message" rows="4" placeholder="Your message..." required></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
          {status && <p className="mt-3">{status}</p>}
        </div>

        <div className="col-md-6">
          <div className="ratio ratio-4x3">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=..."
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
