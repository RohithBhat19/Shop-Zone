import React, { useState } from 'react';
import './Register.css';
import 'font-awesome/css/font-awesome.min.css';

function Register() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    pass1: '',
    pass2: '',
    country: '',
    terms: false,
  });

  const [formErrors, setFormErrors] = useState({
    nameError: '',
    emailError: '',
    pass1Error: '',
    pass2Error: '',
    countryError: '',
    termsError: '',
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetErrors();
    const isValid = validateForm();

    if (isValid) {
      // You can perform further actions here, such as making an API call to register the user.
      // For now, just log the data.
      console.log(formData);
    }
  };

  const validateForm = () => {
    // Validation logic goes here, similar to your original code.

    // Example:
    let isValid = true;
    const { firstname, lastname, email, pass1, pass2, country, terms } = formData;

    // Validate First Name and Last Name
    const nameRegex = /^[A-Za-z]+$/; // Regular expression for letters only
    if (firstname.trim() === '' || lastname.trim() === '') {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        nameError: 'First Name and Last Name are required.',
      }));
      isValid = false;
    } else if (!nameRegex.test(firstname) || !nameRegex.test(lastname)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        nameError: 'First Name and Last Name should contain letters only.',
      }));
      isValid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        emailError: 'Invalid email address.',
      }));
      isValid = false;
    }

    // Validate Password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/;
    if (pass1.length < 6) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        pass1Error: 'Password must be at least 6 characters long.',
      }));
      isValid = false;
    } else if (!passwordRegex.test(pass1)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        pass1Error:
          'Password must contain at least one lowercase letter, one uppercase letter, one special character (!@#$%^&*), and be at least 6 characters long.',
      }));
      isValid = false;
    } else if (pass1 !== pass2) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        pass2Error: 'Passwords do not match.',
      }));
      isValid = false;
    }

    // Validate Country
    if (country === '') {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        countryError: 'Please select a country.',
      }));
      isValid = false;
    }

    // Validate Terms and Conditions
    if (!terms) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        termsError: 'You must accept the terms and conditions.',
      }));
      isValid = false;
    }

    return isValid;
  };

  const resetErrors = () => {
    // Reset form errors
    setFormErrors({
      nameError: '',
      emailError: '',
      pass1Error: '',
      pass2Error: '',
      countryError: '',
      termsError: '',
    });
  };

  return (
    
    <div className="container">
      <form id="form" onSubmit={handleSubmit}>
        <h2>Registration</h2>
        <div className="input-name">
          <i className="fa fa-user user"></i>
          <input
            type="text"
            placeholder="First Name"
            required
            className="name"
            id="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
          <span>
            <i className="fa fa-user user"></i>
            <input
              type="text"
              placeholder="Last Name"
              required
              className="name"
              id="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
          </span>
          <div className="error" id="nameError">
            {formErrors.nameError}
          </div>
        </div>
        <div className="input-name">
          <i className="fa fa-envelope email"></i>
          <input
            type="email"
            placeholder="Email"
            required
            className="text-name"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="error" id="emailError">
            {formErrors.emailError}
          </div>
        </div>
        <div className="input-name">
          <i className="fa fa-lock lock"></i>
          <input
            type="password"
            placeholder="Password"
            required
            className="text-name"
            id="pass1"
            value={formData.pass1}
            onChange={handleChange}
          />
          <div className="error" id="pass1Error">
            {formErrors.pass1Error}
          </div>
        </div>
        <div className="input-name">
          <i className="fa fa-lock lock"></i>
          <input
            type="password"
            placeholder="Confirm Password"
            required
            className="text-name"
            id="pass2"
            value={formData.pass2}
            onChange={handleChange}
          />
          <div className="error" id="pass2Error">
            {formErrors.pass2Error}
          </div>
        </div>
        <div className="input-name">
          <select
            className="country"
            required
            id="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Country</option>
            <option>India</option>
            <option>Italy</option>
            <option>Japan</option>
            <option>Nepal</option>
            <option>Russia</option>
          </select>
          <div className="error" id="countryError">
            {formErrors.countryError}
          </div>
        </div>
        <div className="input-name checkbox-container">
          <input
            type="checkbox"
            className="check-button"
            required
            id="terms"
            checked={formData.terms}
            onChange={handleChange}
          />
          <label className="terms-label">I Accept the terms and conditions</label>
          <div className="error" id="termsError">
            {formErrors.termsError}
          </div>
        </div>
        <div className="input-name">
          <input
            type="submit"
            className="button"
            value="Register"
          />
        </div>
        <div className="login-link">
          <p>
            Already have an account? <a href="/">Login</a>
          </p>
        </div>
      </form>
    </div>
    
  );
}
export default Register;