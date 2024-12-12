import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../components/LoadinG-skeleton/Loader";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/blogs`
        );
        if (response.data.success) {
          setBlogPosts(response.data.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div>
      <section className="py-16 bg-gradient-to-r from-blue-500 to-teal-400">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 text-white">
          <h2 className="text-4xl font-bold text-center mb-12">
          "বাংলাদেশের কিছু সবচেয়ে সুন্দর স্থান:"
          </h2>
          {loading ? (
            <Loader />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {blogPosts.map((blog) => (
                <div
                  key={blog._id}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
                >
                  <img
                    src={blog.image.imageURL}
                    alt={blog.title}
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-4">
                    {blog.description.substr(0, 80)}...
                  </p>
                  <span className="text-sm text-gray-500">
                    {new Date(blog.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <div className="mt-4">
                    <Link
                      to={`/blog/${blog.id}`}
                      className="text-teal-600 hover:text-teal-800 font-medium transition"
                    >
                      Read More &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
