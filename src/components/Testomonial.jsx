import { FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";

const reviews = [
  {
    name: "Amit Sharma",
    rating: 5,
    comment: "Amazing quality! Fits perfectly and looks great on my phone.",
    img_src: 'client1.jpg'
  },
  {
    name: "Priya Verma",
    rating: 4,
    comment: "Good product but took a bit longer to deliver.",
    img_src: 'client2.jpg'

  },
  {
    name: "Rahul Mehta",
    rating: 5,
    comment: "Excellent customer service and top-notch cover!",
    img_src: 'client3.jpg'
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 py-14">
      <div className="max-w-4xl mx-auto p-6 text-center ">
        <div className="flex justify-center gap-6 mb-6">
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-semibold shadow-md">
            ✅ 100% Satisfaction Guaranteed
          </div>
         
        </div>

        {/* Testimonial Section */}
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out "
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="min-w-full shadow-black bg-blue-100  border-2 p-4 rounded-lg shadow">
                <div className="flex items-center justify-center">
                  <img src={review.img_src} alt={review.img_src} width="100%" className="w-20 h-20 rounded-full object-cover" />
                </div>
                <h3 className="text-lg font-semibold">{review.name}</h3>
                <div className="flex justify-center my-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" size={20} />
                  ))}
                </div>
                <p className="text-gray-600">"{review.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
