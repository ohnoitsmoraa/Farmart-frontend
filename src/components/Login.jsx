import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Login.css';
import yourImage from '../assets/Login.jpg'; // Import the image

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    setRole(urlParams.get('role') || ''); // Default to empty if no role is passed
  }, [location.search]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Mock response simulation
    const mockResponse = { success: true, message: 'Login successful!' };

    setLoading(false);

    if (mockResponse.success) {
      navigate(`/${role}-dashboard`); // Redirect based on selected role
    } else {
      setError(mockResponse.message || 'Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="login-container">
      <div className="image-container">
        {/* Display the image here */}
        <img src={yourImage} alt="Login" className="login-image" />
      </div>
      <div className="form-container">
        <h1>{role ? `${role.charAt(0).toUpperCase() + role.slice(1)} Login` : 'Login'}</h1>

        {/* Role selection buttons */}
        {!role && (
          <div className="role-selection">
            <button type="button" className="farmer-button" onClick={() => handleRoleSelect('farmer')}>
              Farmer
            </button>
            <button type="button" className="buyer-button" onClick={() => handleRoleSelect('buyer')}>
              Buyer
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {error && <p>{error}</p>}
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
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
