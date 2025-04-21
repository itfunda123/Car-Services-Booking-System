// src/pages/Admin.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/appointments');
        setAppointments(res.data);
      } catch (err) {
        console.error('Error fetching appointments:', err);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="container">
      <h2 className="mb-4">Admin Panel - View Appointments</h2>
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Service Type</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appt, index) => (
            <tr key={appt._id}>
              <td>{index + 1}</td>
              <td>{appt.name}</td>
              <td>{appt.email}</td>
              <td>{appt.phone}</td>
              <td>{appt.serviceType}</td>
              <td>{appt.date}</td>
              <td>{appt.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
