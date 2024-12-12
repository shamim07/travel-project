import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Admin = () => {
  const [isAdmin, setIsAdmin] = useState(null); // Null for loading state
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true; // Ensure cleanup

    const checkAdminStatus = async () => {
      try {
        const token = sessionStorage.getItem("accessToken");
        if (!token) throw new Error("No token found");

        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/admin`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (isMounted && response?.data?.success) {
          setIsAdmin(true); // User is admin
        } else {
          throw new Error("Unauthorized");
        }
      } catch (error) {
        if (isMounted) {
          setIsAdmin(false);
          console.error("Admin status check failed:", error);
          navigate("/admin/login"); // Redirect to login
        }
      }
    };

    checkAdminStatus();

    return () => {
      isMounted = false; // Cleanup on unmount
    };
  }, [navigate]);

  if (isAdmin === null) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (!isAdmin) {
    return null; // Render nothing while redirecting
  }

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 via-teal-100 to-green-100 min-h-screen">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Welcome, Admin</h2>
        <Link
          to="/"
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-gradient-to-l text-white py-2 px-6 rounded-md shadow-md transition duration-300 transform hover:scale-105"
        >
          Back to Home
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Blog Count Card */}
        <div className="bg-white p-6 rounded-lg shadow-xl text-center hover:shadow-2xl transition duration-300">
          <h3 className="text-xl font-bold text-gray-700 mb-2">Blogs</h3>
          <p className="text-5xl font-semibold text-teal-600">0</p>
          <p className="text-gray-500">Total Blogs</p>
        </div>

        {/* Service Count Card */}
        <div className="bg-white p-6 rounded-lg shadow-xl text-center hover:shadow-2xl transition duration-300">
          <h3 className="text-xl font-bold text-gray-700 mb-2">Services</h3>
          <p className="text-5xl font-semibold text-indigo-600">0</p>
          <p className="text-gray-500">Total Services</p>
        </div>

        {/* Member Count Card */}
        <div className="bg-white p-6 rounded-lg shadow-xl text-center hover:shadow-2xl transition duration-300">
          <h3 className="text-xl font-bold text-gray-700 mb-2">Members</h3>
          <p className="text-5xl font-semibold text-pink-600">0</p>
          <p className="text-gray-500">Total Members</p>
        </div>
      </div>
    </div>
  );
};

export default Admin;
