import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission reload
    setError(""); // Clear any previous errors

    // Validate input fields
    if (!username || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      // Send login request
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/login`,
        { username, password }
      );

      // Handle successful login
      if (response?.data?.success) {
        const token = response.data.accessToken;
        // Store the token in sessionStorage
        sessionStorage.setItem("accessToken", token);

        // Navigate to the admin dashboard
        navigate("/admin");
      } else {
        setError("Invalid username or password.");
      }
    } catch (err) {
      // Handle errors from server or network issues
      const message =
        err.response?.data?.message || "An unexpected error occurred.";
      setError(message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="w-full sm:w-96 bg-white p-8 rounded-lg shadow-xl border-2 border-gray-300">
        <h2 className="text-3xl font-extrabold text-center text-indigo-800 mb-8">
          Admin Login
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;


  