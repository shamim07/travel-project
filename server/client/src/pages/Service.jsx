import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/LoadinG-skeleton/Loader";

const Service = () => {
  // Sample data for services
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/services`
        );
        if (response.data.success) {
          setServices(response.data.data);
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
      <section className="py-16 bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-8">
          আমাদের সেবাসমূহ
          </h2>
          <p className="text-lg text-gray-200 mb-12">
          আমরা আপনার ভ্রমণ যাত্রাকে নিরাপদ, সাশ্রয়ী, আরামদায়ক এবং সুরক্ষিত করে তুলি।
          </p>

          {loading ? (
            <Loader />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {services.map((service) => (
                <div
                  key={service._id}
                  className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-center items-center"
                >
                  <div className="mb-6">
                    <img
                      src={service.image.imageURL}
                      alt={service.title}
                      className="w-24 h-24 object-cover rounded-full border-4 border-teal-500"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-700">{service.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Service;

