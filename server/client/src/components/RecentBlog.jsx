import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./LoadinG-skeleton/Loader";

const RecentBlog = () => {
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
    <section className="py-16 bg-gradient-to-r from-teal-500 to-cyan-600 px-6">
      <div className="container mx-auto text-center max-w-7xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-8">
        "সাম্প্রতিক ব্লগসমূহ"
        </h2>

        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogPosts.slice(0, 4).map((post) => (
              <div
                key={post._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
              >
                <img
                  src={post.image.imageURL}
                  alt={post.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                  <a
                    href={post.link}
                    className="text-teal-500 hover:text-teal-700 font-medium text-sm"
                  >
                   
"আরও জানুন"
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentBlog;
