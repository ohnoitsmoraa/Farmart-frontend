import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const LoginPage = () => {
  const [isFarmer, setIsFarmer] = useState(true);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsFarmer((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
<<<<<<< Development
		e.preventDefault();
		setErrorMessage(""); 
		setLoading(true); 

		try {
			const response = await fetch(
				"http://127.0.0.1:5000/login",
				{
					method: "POST",
					// eslint-disable-next-line no-undef
					body: JSON.stringify({ ...credentials}),
					headers: {
						"Content-type": "application/json; charset=UTF-8",
					},
				}
			);

			const data = await response.json();

			if (response.status === 200) {
				localStorage.setItem("token", data.token);
				Swal.fire({
					title: "Login Successful!",
					text: "Welcome",
					icon: "success",
					button: "Proceed",
				}).then(() => {
					navigate("/home"); 
				});
			} else if (response.status === 401) {
				setErrorMessage(data.message || "Invalid credentials.");
				Swal.fire({
					title: "Error!",
					text: data.message || "Invalid credentials.",
					icon: "error",
					button: "Try Again",
				});
			} else {
				setErrorMessage(data.message || "Something went wrong.");
				Swal.fire({
					title: "Error!",
					text: data.message || "Something went wrong.",
					icon: "error",
					button: "Try Again",
				});
			}
		} catch (error) {
			console.log("Error:", error);
			setErrorMessage("Network error. Please try again later.");
		} finally {
			setLoading(false); 
		}
	};
=======
    e.preventDefault();
    setErrorMessage("");
    
    if (!credentials.email || !credentials.password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const role = isFarmer ? "Farmer" : "Buyer"; 

      const response = await fetch("https://farmart-backend-1-tw0d.onrender.com/login", {
        method: "POST",
        body: JSON.stringify({ ...credentials, role }), 
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      const data = await response.json();

      if (response.status === 200) {
        localStorage.setItem("token", data.token); 
        Swal.fire({
          title: "Login Successful!",
          text: "Welcome",
          icon: "success",
          confirmButtonText: "Proceed",
        }).then(() => {
          navigate(isFarmer ? "/farmer-dashboard" : "/"); 
        });
      } else if (response.status === 401) {
        setErrorMessage(data.message || "Invalid credentials.");
        Swal.fire({
          title: "Error!",
          text: data.message || "Invalid credentials.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      } else {
        setErrorMessage(data.message || "Something went wrong.");
        Swal.fire({
          title: "Error!",
          text: data.message || "Something went wrong.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    } catch (error) {
      console.log("Error:", error);
      setErrorMessage("Network error. Please try again later.");
    } finally {
      setLoading(false); 
    }
  };
>>>>>>> main

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-4/5 max-w-3xl shadow-lg bg-white rounded-lg overflow-hidden">
        {/* Left side with image */}
        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/1498866441/vector/farm-animals.jpg?s=612x612&w=0&k=20&c=awYgtvPHCsHXbOW7OHAwJ6qq3vdibp_5tcTbkS-Y1fc=')",
          }}
        ></div>

        {/* Right side with form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Login to your account
          </h2>
          <p className="text-gray-500 mb-6">
            Don't have an account?{" "}
            <a href="/register" className="text-green-600 hover:underline">
              Register
            </a>
          </p>

          {/* Toggle for Farmer/Buyer */}
          <div className="flex items-center mb-6 justify-center">
            <button
              className={`px-6 py-2 text-center font-semibold ${
                isFarmer
                  ? "bg-green-700 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
              onClick={() => setIsFarmer(true)}
            >
              Farmer
            </button>
            <button
              className={`px-6 py-2 text-center font-semibold ${
                !isFarmer
                  ? "bg-green-700 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
              onClick={() => setIsFarmer(false)}
            >
              Buyer
            </button>
          </div>

          {/* Error Message */}
          {error && <div className="text-red-600 text-center mb-4">{error}</div>}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={credentials.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <button
              type="submit"
              className={`w-full py-3 mt-4 bg-green-700 text-white font-bold rounded-lg hover:bg-green-800 transition duration-300 ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
              disabled={loading} 
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Forgot Password Link */}
          <div className="text-center mt-4">
            <a href="/forgot-password" className="text-green-600 hover:underline">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
