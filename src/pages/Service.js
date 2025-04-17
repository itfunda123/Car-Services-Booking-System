import React, { useState } from 'react';
import axios from 'axios';

const Service = () => {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', serviceType: '', date: '', time: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/appointments', form);
    alert("Appointment booked successfully!");
    setForm({ name: '', email: '', phone: '', serviceType: '', date: '', time: '' });
  };

  return (
    <div>
      <h2>Book a Service</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        {['name', 'email', 'phone', 'serviceType', 'date', 'time'].map((field) => (
          <div className="col-md-6" key={field}>
            <label className="form-label">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              type={field === 'email' ? 'email' : 'text'}
              name={field}
              value={form[field]}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        ))}
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Book Appointment</button>
        </div>
      </form>
    </div>
  );
};

export default Service;
