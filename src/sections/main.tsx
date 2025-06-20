import AnimatedText from "@/components/animateText";
import ImageCarousel from "@/components/imageCarousel";
import { FaRegStar, FaChevronDown } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Main() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">
      <section className="relative z-20 w-full pt-8 pb-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div
              className="order-1 lg:order-1 text-center lg:text-left"
              style={{ transform: `translateY(${scrollY * 0.06}px)` }}
            >
              <div className="w-full flex justify-center lg:justify-start mb-8">
                <div className="inline-flex items-center px-4 py-2 backdrop-blur-md rounded-full bg-blue-950/30 border border-gray-700">
                  <FaRegStar className="w-4 h-4 mr-2 text-orange-400" />
                  <span className="text-sm text-gray-300">
                    Excellence in Education Since 2021
                  </span>
                </div>
              </div>

              <h1 className="text-[2rem] sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                <span className="block">
                  <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                    Mahayogi&nbsp;
                  </span>
                  <span className="text-white">Gorakhnath</span>
                </span>
                <span className="block">
                  <span className="text-white">University&nbsp;</span>
                  <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                    Gorakhpur
                  </span>
                </span>
              </h1>
              {/* start */}
              <div className="mb-8 relative">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
                    <span className="relative inline-block">
                      <AnimatedText
                        text="REDEFINING"
                        speed={50}
                        delay={0}
                        loopInterval={6000}
                        className="bg-orange-400 bg-clip-text text-transparent"
                      />
                      <span className="absolute -inset-1 bg-gradient-to-r from-orange-600/20 to-amber-600/20 blur-lg -z-10 animate-pulse rounded"></span>
                    </span>
                    <br />
                    <span className="relative inline-block">
                      <AnimatedText
                        text="EDUCATION"
                        speed={50}
                        delay={800}
                        loopInterval={6000}
                        className="bg-orange-400 bg-clip-text text-transparent"
                      />
                      <span className="absolute -inset-1 bg-gradient-to-r from-amber-600/20 to-orange-600/20 blur-lg -z-10 animate-pulse rounded"></span>
                    </span>
                  </h2>
                  <div className="mt-3 h-1 w-32 mx-auto lg:ml-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full">
                    <div className="h-full w-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
              {/* end */}
              <p className="text-base sm:text-lg text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Empowering minds, fostering innovation, and building the leaders
                of tomorrow through world-class education and cutting-edge
                research.
              </p>
              <div className="flex flex-row gap-3 justify-center lg:justify-start flex-wrap">
                <a href="https://mgug.ac.in/academics/programmes_list.php">
                  <button className="px-4 py-3 text-sm sm:px-5 sm:py-3 sm:text-base rounded-lg font-semibold bg-gradient-to-r from-orange-600 to-amber-600 hover:scale-105 transition-all duration-300">
                    Explore Programs
                  </button>
                </a>

                <button className="px-4 py-3 text-sm sm:px-5 sm:py-3 sm:text-base rounded-lg font-semibold bg-gray-900/50 border border-gray-700 hover:border-orange-500/50 hover:bg-gray-900/70 transition-all duration-300">
                  Virtual Tour
                </button>
              </div>
            </div>

            {/* Right Content - Image Carousel */}
            <div
              className="order-2 lg:order-2 flex justify-center mt-8 lg:mt-0"
              style={{ transform: `translateY(${scrollY * -0.03}px)` }}
            >
              <div className="transform transition-transform duration-1000 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-4xl">
                <ImageCarousel />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <FaChevronDown className="w-8 h-8 text-gray-500" />
        </div>
      </section>
    </div>
  );
}
