import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import yourImage from '../assets/Register.jpg';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'farmer',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (error) {
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!formData.name || !formData.email || !formData.password) {
      setError('All fields are required.');
      setLoading(false);
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(formData.email)) {
      setError('Please enter a valid email address.');
      setLoading(false);
      return;
    }

    // Simulate registration API response
    const mockResponse = { success: true, message: 'Registration successful!' };

    setLoading(false);

    if (mockResponse.success) {
      setFormData({ name: '', email: '', password: '', role: 'farmer' });
      navigate(`/login?role=${formData.role}`);
    } else {
      setError(mockResponse.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-page">
      <div className="register-image">
        <img src={yourImage} alt="Register" />
      </div>
      <div className="register">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          {error && <p className="error">{error}</p>}

          <div className="role-selection">
            <label className="role-label">Role:</label>
            <div className="role-options">
              <label>
                <input
                  type="radio"
                  name="role"
                  value="farmer"
                  checked={formData.role === 'farmer'}
                  onChange={handleChange}
                />
                Farmer
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="buyer"
                  checked={formData.role === 'buyer'}
                  onChange={handleChange}
                />
                Buyer
              </label>
            </div>
          </div>

          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
