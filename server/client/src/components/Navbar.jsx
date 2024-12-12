import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Detect scroll and update navbar state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-teal-600 shadow-lg" : "bg-lime-300"
      }`}
    >
      <div className="container max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex text-green-950">
          <Link to="/" className="hover:text-teal-700 transition">
            {/* Travel<span className="text-teal-400">Dream</span> */}
            {/* text-2xl font-extrabold tracking-wide text-teal-600 */}
            <img src="/tlogo.png" alt="" className="h-7 w-auto" />
          
          </Link>
          <div>  ট্রাভেল এজেন্সি</div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className={`${
              isScrolled ? "text-white" : "text-teal-600"
            } focus:outline-none`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <ul
          className={`lg:flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-8 text-lg absolute ${
            isScrolled ? "bg-teal-600" : "bg-white"
          } w-full top-16 left-0 p-6 lg:p-0 lg:w-auto lg:bg-transparent lg:static ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link
              to="/"
              className={`${
                isScrolled ? "text-white" : "text-teal-600"
              } hover:text-teal-300 font-medium transition`}
            >
              হোম
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`${
                isScrolled ? "text-white" : "text-teal-600"
              } hover:text-teal-300 font-medium transition`}
            >
             সম্পর্কে
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={`${
                isScrolled ? "text-white" : "text-teal-600"
              } hover:text-teal-300 font-medium transition`}
            >
              ব্লগ
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`${
                isScrolled ? "text-white" : "text-teal-600"
              } hover:text-teal-300 font-medium transition`}
            >
             পরিষেবাসমূহ
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`${
                isScrolled ? "text-white" : "text-teal-600"
              } hover:text-teal-300 font-medium transition`}
            >
             যোগাযোগ
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
