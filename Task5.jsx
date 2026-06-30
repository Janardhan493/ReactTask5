import React, { useState } from 'react'; 
import './Task5.css';

function Task5() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');

  // Error and Success validation states
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  // 2. Clear Form Validation Logic
  const validateForm = () => {
    let currentErrors = {};

    if (firstName.trim() === '') currentErrors.firstName = 'First name is required';
    if (lastName.trim() === '') currentErrors.lastName = 'Last name is required';

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
      currentErrors.email = 'Email is required';
    } else if (!emailPattern.test(email)) {
      currentErrors.email = 'Enter a valid email format';
    }

    const mobilePattern = /^[0-9]{10}$/;
    if (mobile === '') {
      currentErrors.mobile = 'Mobile number is required';
    } else if (!mobilePattern.test(mobile)) {
      currentErrors.mobile = 'Must be exactly 10 digits';
    }

    if (password === '') {
      currentErrors.password = 'Password is required';
    } else if (password.length < 6) {
      currentErrors.password = 'Must be at least 6 characters';
    }

    if (confirmPassword === '') {
      currentErrors.confirmPassword = 'Please confirm password';
    } else if (password !== confirmPassword) {
      currentErrors.confirmPassword = 'Passwords do not match';
    }

    if (dob === '') currentErrors.dob = 'Date of Birth is required';
    if (gender === '') currentErrors.gender = 'Gender is required';
    if (city.trim() === '') currentErrors.city = 'City is required';
    if (address.trim() === '') currentErrors.address = 'Address is required';

    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  // 3. Submit Handler
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setSuccessMessage('🎉 Registration Successful! All details are valid.');
      console.log('Submitted Data:', {
        firstName, lastName, email, mobile, password, dob, gender, city, address
      });
    } else {
      setSuccessMessage('');
    }
  };

  return (
    <div className="registration-container">
      <h2 className='registration-header'>Registration Form (Task 5)</h2>

      {successMessage && <div className='success-banner'>{successMessage}</div>}

      <form onSubmit={handleSubmit}>
        
        {/* Row 1: First Name & Last Name */}
        <div className="grid-row">
          <div className="form-control">
            <label className="form-label">First Name *</label>
            <input 
              className="form-input" type="text" placeholder="John"
              value={firstName} onChange={(e) => setFirstName(e.target.value)} 
            />
            {errors.firstName && <span className="error-text">{errors.firstName}</span>}
          </div>

          <div className="form-control">
            <label className="form-label">Last Name *</label>
            <input 
              className="form-input" type="text" placeholder="Doe"
              value={lastName} onChange={(e) => setLastName(e.target.value)} 
            />
            {errors.lastName && <span className="error-text">{errors.lastName}</span>}
          </div>
        </div>

        {/* Row 2: Email & Mobile Number */}
        <div className="grid-row">
          <div className="form-control">
            <label className="form-label">Email *</label>
            <input 
              className="form-input" type="text" placeholder="john@example.com"
              value={email} onChange={(e) => e.target.value === '' ? setEmail('') : setEmail(e.target.value)} 
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-control">
            <label className="form-label">Mobile Number *</label>
            <input 
              className="form-input" type="text" placeholder="10-digit phone number"
              value={mobile} onChange={(e) => setMobile(e.target.value)} 
            />
            {errors.mobile && <span className="error-text">{errors.mobile}</span>}
          </div>
        </div>

        {/* Row 3: Password & Confirm Password */}
        <div className="grid-row">
          <div className="form-control">
            <label className="form-label">Password *</label>
            <input 
              className="form-input" type="password" placeholder="At least 6 chars"
              value={password} onChange={(e) => setPassword(e.target.value)} 
            />
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>

          <div className="form-control">
            <label className="form-label">Confirm Password *</label>
            <input 
              className="form-input" type="password" placeholder="Re-type password"
              value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} 
            />
            {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
          </div>
        </div>

        {/* Row 4: Date of Birth & Gender */}
        <div className="grid-row">
          <div className="form-control">
            <label className="form-label">Date of Birth *</label>
            <input 
              className="form-input" type="date"
              value={dob} onChange={(e) => setDob(e.target.value)} 
            />
            {errors.dob && <span className="error-text">{errors.dob}</span>}
          </div>

          <div className="form-control">
            <label className="form-label">Gender *</label>
            <select 
              className="form-input" 
              value={gender} onChange={(e) => setGender(e.target.value)}
            >
              <option value="">-- Select --</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <span className="error-text">{errors.gender}</span>}
          </div>
        </div>

        {/* Row 5: City */}
        <div className="grid-row">
          <div className="form-control">
            <label className="form-label">City *</label>
            <input 
              className="form-input" type="text" placeholder="e.g. Bangalore"
              value={city} onChange={(e) => setCity(e.target.value)} 
            />
            {errors.city && <span className="error-text">{errors.city}</span>}
          </div>
        </div>

        {/* Row 6: Full Address */}
        <div className="grid-row">
          <div className="form-control">
            <label className="form-label">Full Address *</label>
            <input 
              className="form-input" type="text" placeholder="Door No, Street Name..."
              value={address} onChange={(e) => setAddress(e.target.value)} 
            />
            {errors.address && <span className="error-text">{errors.address}</span>}
          </div>
        </div>
        
        <button className="submit-button" type="submit">Submit Registration</button>
      </form>
    </div>
  );
}

export default Task5;