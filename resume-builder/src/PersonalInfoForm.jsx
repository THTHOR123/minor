import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PersonalInfoForm.css';

function PersonalInfoForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [collegename, setCollegeName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission here
  };

  return (
    <div className="form-container">
      <header>
        <nav>
          <ul>
            <li><Link to="/Home">Home</Link></li>
          </ul>
        </nav>
      </header>
          
      <form onSubmit={handleSubmit} className="personal-info-form">
        <h1>Personal Details</h1>
        <label className="form-label">
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="form-input"
            required
          />
        </label>
        <br />
        <label className="form-label">
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="form-input"
            required
          />
        </label>
        <br />

        <label className="form-label">
          College Name:
          <input
            type="text"
            value={collegename}
            onChange={(e) => setCollegeName(e.target.value)}
            className="form-input"
            required
          />
        </label>

        <br />
        <label className="form-label">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            required
          />
        </label>
        <br />
        <label className="form-label">
          Phone:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-input"
            required
          />
        </label>
        <br />
        <button type="submit" className="form-submit-button">Submit</button>
      </form>
    </div>
  );
}

export default PersonalInfoForm;
