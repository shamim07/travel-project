import { useState, useEffect } from "react";

const Slider = () => {
  const images = [
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0", // Image 1
  "/22.jpg", // Image 3
    "/33.jpg", // Image 4
    "/44.jpg", // Image 5
  "/00.jpg"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Slider Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      ))}

      {/* Bubbles Effect */}
      <div className="absolute inset-0 pointer-events-none z-10 bubbles">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="bubble"
            style={{
              animationDelay: `${Math.random() * 5}s`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 30 + 20}px`,
              height: `${Math.random() * 30 + 20}px`,
            }}
          ></div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 sm:px-8 z-20">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-wide mb-4">
          "প্রকৃতির অপূর্ব দৃশ্যের সন্ধান নিন"
        </h1>
        <p className="text-base sm:text-lg mb-6 max-w-3xl">
          "আমাদের সাথে অপূর্ব প্রাকৃতিক দৃশ্যগুলি অন্বেষণ করুন এবং শান্তিপূর্ণ প্রাকৃতিক সৌন্দর্যে হারিয়ে যান।"
        </p>
        <a
          href="#"
          className="bg-teal-500 text-white py-2 px-8 rounded-lg text-lg font-medium shadow-lg hover:scale-105 hover:bg-teal-600 transition-all"
        >
          "আপনার অভিযানের পরিকল্পনা করুন"
        </a>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() =>
          setCurrentImage(
            (prevImage) => (prevImage - 1 + images.length) % images.length
          )
        }
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-4 shadow-lg hover:bg-teal-500 transition-all"
      >
        &#8592;
      </button>
      <button
        onClick={() =>
          setCurrentImage((prevImage) => (prevImage + 1) % images.length)
        }
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-4 shadow-lg hover:bg-teal-500 transition-all"
      >
        &#8594;
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full ${
              index === currentImage
                ? "bg-teal-500"
                : "bg-teal-100 bg-opacity-60"
            } transition-all duration-300`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Slider;


// import { useState, useEffect } from "react";

// const Slider = () => {
//   const images = [
//     "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0", // Image 1
//     "/11", // Image 2 (Make sure this path is correct)
//     "/22", // Image 3 (Make sure this path is correct)
//     "/33", // Image 4 (Make sure this path is correct)
//     "/44", // Image 5 (Make sure this path is correct)
//   ];

//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prevImage) => (prevImage + 1) % images.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <section className="relative w-full h-screen overflow-hidden">
//       {/* Slider Images */}
//       {images.map((image, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-1000 ${
//             index === currentImage ? "opacity-90" : "opacity-50"
//           }`}
//           style={{
//             backgroundImage: `url(${image})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         ></div>
//       ))}

//       {/* Bubbles Effect */}
//       <div className="absolute inset-0 pointer-events-none z-10 bubbles">
//         {Array.from({ length: 20 }).map((_, index) => (
//           <div
//             key={index}
//             className="bubble"
//             style={{
//               animationDelay: `${Math.random() * 5}s`,
//               left: `${Math.random() * 100}%`,
//               width: `${Math.random() * 30 + 20}px`,
//               height: `${Math.random() * 30 + 20}px`,
//             }}
//           ></div>
//         ))}
//       </div>

//       {/* Content Overlay */}
//       <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 sm:px-6">
//         <h1 className="text-4xl sm:text-6xl font-bold leading-tight tracking-wide mb-4">
//           "প্রকৃতির অপূর্ব দৃশ্যের সন্ধান নিন"
//         </h1>
//         <p className="text-base sm:text-lg mb-6 max-w-3xl">
//           "আমাদের সাথে অপূর্ব প্রাকৃতিক দৃশ্যগুলি অন্বেষণ করুন এবং শান্তিপূর্ণ প্রাকৃতিক সৌন্দর্যে হারিয়ে যান।"
//         </p>
//         <a
//           href="#"
//           className="bg-teal-500 text-white py-2 px-8 rounded-lg text-lg font-medium shadow-lg hover:scale-105 hover:bg-teal-600"
//         >
//           "আপনার অভিযানের পরিকল্পনা করুন"
//         </a>
//       </div>

//       {/* Navigation Arrows */}
//       <button
//         onClick={() =>
//           setCurrentImage(
//             (prevImage) => (prevImage - 1 + images.length) % images.length
//           )
//         }
//       >
//         &#8592;
//       </button>
//       <button
//         onClick={() =>
//           setCurrentImage((prevImage) => (prevImage + 1) % images.length)
//         }
//       >
//         &#8594;
//       </button>

//       {/* Progress Indicators */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
//         {images.map((_, index) => (
//           <div
//             key={index}
//             className={`w-3 h-3 rounded-full ${
//               index === currentImage
//                 ? "bg-teal-500"
//                 : "bg-teal-100 bg-opacity-50"
//             } transition-all duration-300`}
//           ></div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Slider;
