import { useState } from "react";
import axios from "axios";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateFormData = () => {
    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) {
      return "All fields are required.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address.";
    }
    return null; // Validation passed
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: false, success: null, error: null });

    const error = validateFormData();
    if (error) {
      setStatus({ loading: false, success: null, error });
      return;
    }

    setStatus({ loading: true, success: null, error: null });

    try {
      await axios.post("/api/v1/contact", formData);
      setStatus({
        loading: false,
        success: "Message sent successfully!",
        error: null,
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({
        loading: false,
        success: null,
        error: error.response?.data?.message || "Something went wrong!",
      });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-green-100 to-teal-100 text-white">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        {/* Heading Section */}
        <div className="text-center mb-12 ">
          <h2 className="text-4xl font-bold text-slate-700 mb-4">যোগাযোগ করুন</h2>
          <p className="text-lg text-neutral-500">
          আমরা আপনার মতামত শুনতে আগ্রহী! নিচের ফর্মটি পূরণ করুন অথবা ডানপাশে দেওয়া যোগাযোগের তথ্যের মাধ্যমে আমাদের সঙ্গে যোগাযোগ করুন।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 "  >
          {/* Contact Form Section */}
          <div className="bg-gradient-to-r from-green-500 to-red-200 h p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            আমাদের একটি বার্তা পাঠান।
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-800 font-medium mb-2"
                >
                  আপনার নাম
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-800 font-medium mb-2"
                >
                  আপনার ইমেইল
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-red-100"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-800 font-medium mb-2 bg-red-100"
                >
                 আপনার বার্তা
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-red-100"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status.loading}
                className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition"
              >
                {status.loading ? "Sending..." : "Send Message"}
              </button>
            </form>

            {status.success && (
              <p className="mt-4 text-green-600 font-medium">
                {status.success}
              </p>
            )}
            {status.error && (
              <p className="mt-4 text-red-600 font-medium">{status.error}</p>
            )}
          </div>

          {/* Contact Information Section */}
          <div className="bg-lime-300 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            যোগাযোগের তথ্য
            </h3>
            <div className="space-y-6 ">
              {/* Address */}
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-teal-500 w-6 h-6" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                  আমাদের অফিস
                  </h4>
                  <p className="text-gray-600">
                    1234 Dhaka
                  </p>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-teal-500 w-6 h-6" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
                  <p className="text-gray-600">+1 (234) 567-890</p>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-teal-500 w-6 h-6" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">contact@company.com</p>
                </div>
              </div>
              {/* Social Media */}
              <div >
                <h4 className="text-lg font-semibold text-gray-800">
                আমাদের অনুসরণ করুন:
                </h4>
                <div className="flex space-x-6 mt-4">
                  <a
                    href="#"
                    className="text-teal-500 hover:text-teal-700 transition"
                  >
                    <FaTwitter className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-teal-700 hover:text-teal-900 transition"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-800 hover:text-gray-900 transition"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
