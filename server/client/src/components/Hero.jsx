import { useEffect } from "react";

const Hero = () => {
 

  return (
    <section className="relative bg-cover bg-center py-32 text-center"    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-teal-100 bg-opacity-90"></div>

      {/* Bubbles */}
      <div className="absolute inset-0 b"></div>

      <div className="relative z-10 container max-w-5xl mx-auto text-lime-950">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          "প্রকৃতির সৌন্দর্য আবিষ্কার করুন..."
        </h1>
        <p className="text-lg sm:text-xl mb-8">
          আকর্ষণীয় কনটেন্ট তৈরি ও আপনার দর্শকদের সংখ্যা বাড়ানোর জন্য প্রয়োজনীয় সরঞ্জাম, কৌশল এবং অন্তর্দৃষ্টি আবিষ্কার করুন।
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#explore"
            className="bg-yellow-400 text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300"
          >
            "এখনই অন্বেষণ করুন"
          </a>
          <a
            href="#learn-more"
            className="bg-transparent border border-white py-3 px-6 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition duration-300"
          >
            "আরও জানুন"
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;




// const Hero = () => {


//   return (
//     <section className="relative bg-cover bg-center py-32 text-center" style={{ backgroundImage: `url('https://source.unsplash.com/1600x900/?nature,landscape')` }}>
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-60"></div>

//       <div className="relative z-10 container max-w-5xl mx-auto text-white">
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
         
// "প্রকৃতির সৌন্দর্য আবিষ্কার করুন..."
//         </h1>
//         <p className="text-lg sm:text-xl mb-8">
//         আকর্ষণীয় কনটেন্ট তৈরি ও আপনার দর্শকদের সংখ্যা বাড়ানোর জন্য প্রয়োজনীয় সরঞ্জাম, কৌশল এবং অন্তর্দৃষ্টি আবিষ্কার করুন।
//         </p>

//         <div className="flex justify-center gap-4">
//           <a
//             href="#explore"
//             className="bg-yellow-400 text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300"
//           >
//           "এখনই অন্বেষণ করুন"
//           </a>
//           <a
//             href="#learn-more"
//             className="bg-transparent border border-white py-3 px-6 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition duration-300"
//           >
//            "আরও জানুন"
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
