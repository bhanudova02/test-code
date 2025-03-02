import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function BenefitsAccordion({data}) {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="bg-gray-100 py-8">
      <div className="w-full mx-auto p-8 md:p-10">
        <h2 className="text-3xl font-semibold mb-4 ">Our Benefits</h2>
        <div className="space-y-2">
          {data.map((item, index) => (
            <div key={index} className="shadow border-2 border-gray-400 rounded-lg overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-3 bg-white text-left"
                onClick={() => toggleAccordion(index)}
              >
                <div className="font-medium flex items-center gap-1">
                  <span className="font-semibold">{item.title}</span>
                  <img src={item.icon} alt={item.icon} className="w-6" />
                </div>
                {openIndex === index ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-40 p-3 opacity-100" : "max-h-0 p-0 opacity-0"
                  } bg-gray-100 text-gray-600`}
              >
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
