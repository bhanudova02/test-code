import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

export default function Carousel({ images, captions }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mx-auto overflow-hidden shadow-lg mt-14 border border-black/10">
      <div
        className="flex transition-transform duration-500 ease-in-out transform"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="relative w-full flex-shrink-0">
            <img src={src} alt={`Slide ${index + 1}`} className="w-full h-[180px] md:h-full object-cover object-center" />
            <button className=" absolute bottom-8 mb-16 md:mb-20 cursor-pointer md:bottom-10 left-1/2 transform -translate-x-1/2 bg-green-500 md:bg-green-500/80 bg-opacity-50 text-white px-4 py-2 rounded-md text-xs text-center md:text-lg font-semibold">
              <span className="flex items-center gap-2">Shop Now <TiShoppingCart /></span>
            </button>
            <p className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 bg-black/5 md:bg-black/40 bg-opacity-50 text-white px-4 py-2 rounded-md text-xs text-center md:text-lg font-semibold">
              {captions[index]}
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
      >
        <FaChevronRight />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${currentIndex === index ? "bg-white" : "bg-gray-500"
              }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
