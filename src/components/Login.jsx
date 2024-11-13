import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    setRole(urlParams.get('role'));
  }, [location.search]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const mockResponse = { success: true, message: 'Login successful!' };

    setLoading(false);

    if (mockResponse.success) {
      navigate(`/${role}-dashboard`); 
    } else {
      setError(mockResponse.message || 'Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="form-container">
      <h1>{role ? `${role.charAt(0).toUpperCase() + role.slice(1)} Login` : 'Login'}</h1>
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
  );
}

export default Login;
