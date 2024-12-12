import Team from "../components/Team";

const About = () => {
  return (
    <div>
      <section className="py-16 bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 flex flex-col lg:flex-row justify-between gap-8">
          {/* Left Side - Text Section */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-4xl font-extrabold text-white mb-4">"আমাদের সম্পর্কে</h2>
            <p className="text-lg text-gray-200 mb-6">
            "আপনার ট্রাভেল যাত্রাকে অন্তর্দৃষ্টিপূর্ণ কনটেন্ট এবং পেশাদার পরামর্শের মাধ্যমে শক্তিশালী করছি। আমাদের লক্ষ্য একটি প্ল্যাটফর্ম তৈরি করা যা সৃজনশীলতা, জ্ঞান শেয়ারিং এবং কমিউনিটি এনগেজমেন্টকে উৎসাহিত করে। আসুন, আমরা একসাথে ভ্রমণের শিল্প আবিষ্কার করি!"
            </p>

            {/* Additional Info */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white mb-2"> আমাদের মিশন </h3>
              <p className="text-lg text-gray-200 mb-6">
              আমাদের মিশন হলো ব্যক্তিদের তাদের ট্রাভেল যাত্রা শুরু করতে অনুপ্রাণিত করা, তাদের এমন সরঞ্জাম এবং রিসোর্স সরবরাহ করা যা তাদের গল্প, ধারণা এবং অভিজ্ঞতা বিশ্বের সঙ্গে সহজে শেয়ার করতে সহায়ক।
              </p>

              <h3 className="text-lg font-semibold text-white mb-2"> আমাদের ভিশন</h3>
              <p className="text-lg text-gray-200 mb-6">
              "আমরা একটি এমন পৃথিবী কল্পনা করি যেখানে যে কেউ একটি গল্প বলতে চায়, তার একটি অংশগ্রহণমূলক শ্রোতার সাথে তা শেয়ার করার সুযোগ থাকবে।"
              </p>
            </div>

            {/* Call to Action */}
            <a
              href="#"
              className="inline-block text-lg font-semibold bg-yellow-400 hover:bg-yellow-500 text-gray-800 py-3 px-6 rounded-md transition mt-4"
            >
              "আজই আমাদের সাথে যোগ দিন"
            </a>
          </div>

          {/* Right Side - Image Section */}
          <div className="lg:w-1/2">
            <img
              src="/im1.jpg"
              alt="Nature"
              className=" object-cover rounded-lg shadow-2xl"
              // width="90%"  // or a fixed width like '500px'
              // height="h-5"  // This should be properly closed now
            />
          </div>
        </div>
      </section>

      <Team />
    </div>
  );
};

export default About;
