const Discover = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center text-white">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Discover What We Offer
        </h2>
        <p className="text-lg sm:text-xl mb-12">
          Unlock premium services and exceptional content to elevate your journey.
        </p>

        {/* Features or Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center items-center mb-4">
              <div className="bg-indigo-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">
                <i className="fas fa-file-alt text-xl"></i>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-indigo-600">
              Quality Content
            </h3>
            <p className="text-gray-600">
              Delivering well-researched, engaging content that captivates your audience.
            </p>
          </div>

          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center items-center mb-4">
              <div className="bg-purple-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">
                <i className="fas fa-user-tie text-xl"></i>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-purple-600">
              Professional Guidance
            </h3>
            <p className="text-gray-600">
              Expert advice to enhance your blogging strategy and achieve success.
            </p>
          </div>

          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center items-center mb-4">
              <div className="bg-pink-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">
                <i className="fas fa-lightbulb text-xl"></i>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-pink-600">
              Creative Solutions
            </h3>
            <p className="text-gray-600">
              Innovative strategies to amplify your blog’s performance and outreach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
