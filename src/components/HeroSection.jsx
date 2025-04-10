import React from "react";

const HeroSection = () => {
  return (
    <section
      className="pt-32 pb-16 md:pt-40 md:pb-32 relative overflow-hidden"
      id="home"
      style={{ scrollMarginTop: "100px" }}
    >
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent z-10"></div>
        <img
          src="https://www.easymath.in/wp-content/uploads/2023/02/Kavita-Rana.jpg"
          alt="Kavita Rana - Mathematics Educator"
          className="object-cover object-center h-full w-full"
        />
      </div>
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-2xl lg:ml-16 xl:ml-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 uppercase">
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Master Math Concepts <br />
            </span>{" "}
            <span className="text-gray-900">With 20+ years expertise</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-lg">
            Transform your math skills with personalized guidance from Kavita
            Rana - IIT alumnus and proven education specialist
          </p>
          <a href="#contact">
            <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-xl hover:shadow-2xl  transition-all  duration-300 whitespace-nowrap cursor-pointer transform hover:-translate-y-1">
              Book Your FREE Demo Class
            </button>
            <div className="mt-12 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-blue-500"
                  ></div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                Join 1000+ successful students
              </p>
            </div>
          </a>
        </div>
      </div>
      {/*Decorative element */}
      <div className="absolute bottom-8 left-8 w-24 h-24 rounded-full bg-blue-400/20 blur-xl z-10"></div>
      <div className="absolute top-1/4 right-16 w-16 h-16 rounded-full bg-blue-600/20 blur-lg z-10"></div>
    </section>
  );
};

export default HeroSection;
