import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200">
      {/* Main Footer Section */}
      <div className="container max-w-7xl mx-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-teal-400">
            "ট্রাভেল এজেন্সি"
            </h3>
            <p className="text-sm text-gray-400">
            "আপনার ভ্রমণ যাত্রাকে অন্তর্দৃষ্টিপূর্ণ দৃষ্টি এবং পেশাদার গাইডেন্সের মাধ্যমে শক্তিশালী করা হচ্ছে। চলুন, একসাথে আকর্ষণীয় এবং প্রভাবশালী ভ্রমণ তৈরি করি।"
            </p>
          </div>
          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-teal-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-teal-400 transition">
                হোম
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-teal-400 transition">
                সম্পর্কে
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-teal-400 transition">
                ব্লগ
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-teal-400 transition">
                পরিষেবাসমূহ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-teal-400 transition">
                যোগাযোগ"
                </Link>
              </li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-teal-400">
            "আমাদের সাথে যোগাযোগ করুন"
            </h3>
            <p className="text-sm text-gray-400">Email: contact@agencyblog.com</p>
            <p className="text-sm text-gray-400">Phone: 123456789</p>
          </div>
          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-teal-400">"আমাদের অনুসরণ করুন"</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://facebook.com"
                  className="hover:text-teal-400 transition flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="mr-2" /> "ফেসবুক"
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  className="hover:text-teal-400 transition flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="mr-2" />

টুইটার
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  className="hover:text-teal-400 transition flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="mr-2" /> 

ইনস্টাগ্রাম
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Small Footer */}
      <div className="bg-gray-800 py-4 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()}"ট্রাভেল এজেন্সি। সকল অধিকার সংরক্ষিত।"</p>
      </div>
    </footer>
  );
};

export default Footer;
