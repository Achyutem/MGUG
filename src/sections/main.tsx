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
				<div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 2xl:gap-24 items-center min-h-[60vh] lg:min-h-[70vh]">
						{/* Left Content */}
						<div
							className="order-1 lg:order-1 text-center lg:text-left flex flex-col justify-center"
							style={{ transform: `translateY(${scrollY * 0.06}px)` }}
						>
							<div className="w-full flex justify-center lg:justify-start mb-6 lg:mb-8">
								<div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 backdrop-blur-md rounded-full bg-blue-950/30 border border-gray-700">
									<FaRegStar className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-orange-400" />
									<span className="text-xs sm:text-sm text-gray-300">
										Excellence in Education Since 2021
									</span>
								</div>
							</div>

							<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold mb-4 lg:mb-6 leading-tight text-white">
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

							{/* Animated Text Section */}
							<div className="mb-6 lg:mb-8 relative">
								<div className="text-center lg:text-left">
									<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black text-white">
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
									<div className="mt-2 lg:mt-3 h-0.5 lg:h-1 w-20 sm:w-24 lg:w-32 mx-auto lg:ml-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full">
										<div className="h-full w-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse" />
									</div>
								</div>
							</div>

							<p className="text-base sm:text-lg lg:text-lg xl:text-xl text-gray-400 mb-6 lg:mb-10 max-w-md lg:max-w-xl xl:max-w-2xl mx-auto lg:mx-0 leading-relaxed">
								Empowering minds, fostering innovation, and building the leaders
								of tomorrow through world-class education and cutting-edge
								research.
							</p>

							<div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
								<a href="https://mgug.ac.in/academics/programmes_list.php">
									<button className="w-full sm:w-auto px-4 py-3 text-sm sm:px-5 sm:py-3 sm:text-base rounded-lg font-semibold bg-gradient-to-r from-orange-600 to-amber-600 hover:scale-105 transition-all duration-300">
										Explore Programs
									</button>
								</a>

								<button className="w-full sm:w-auto px-4 py-3 text-sm sm:px-5 sm:py-3 sm:text-base rounded-lg font-semibold bg-gray-900/50 border border-gray-700 hover:border-orange-500/50 hover:bg-gray-900/70 transition-all duration-300">
									Virtual Tour
								</button>
							</div>
						</div>

						{/* Right Content - Image Carousel */}
						<div
							className="order-2 lg:order-2 flex justify-center items-center mt-8 lg:mt-0"
							style={{ transform: `translateY(${scrollY * -0.03}px)` }}
						>
							<div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
								<ImageCarousel />
							</div>
						</div>
					</div>
				</div>

				<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
					<FaChevronDown className="w-6 h-6 lg:w-8 lg:h-8 text-gray-500" />
				</div>
			</section>
		</div>
	);
}
