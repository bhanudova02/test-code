import { useState, useEffect } from "react";
import { TiShoppingCart } from "react-icons/ti";

export default function SLider({ images, captions }) {
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
        const interval = setInterval(nextSlide, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="py-14 px-10 mx-0 md:mx-14 ">
                <div className="relative w-full overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out transform"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {images.map((src, index) => (
                            <div key={index} className="relative w-full flex-shrink-0">
                                <img src={src} alt={`Slide ${index + 1}`} className="w-full h-[180px] md:h-full object-cover object-center rounded-xl" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
