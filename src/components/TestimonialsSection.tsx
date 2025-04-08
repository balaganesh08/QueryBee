
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "QueryBee has transformed how we manage our company knowledge. Our team now finds information in seconds rather than hours. The AI search is incredibly accurate.",
    name: "Priya Sharma",
    position: "Operations Manager",
    company: "TechSolutions India"
  },
  {
    text: "Onboarding new employees is so much easier now. They can quickly access all company policies and procedures through natural language queries. Highly recommended!",
    name: "Raj Patel",
    position: "HR Director",
    company: "InnovateCraft"
  },
  {
    text: "The ROI on QueryBee has been phenomenal. Our customer service team responds to queries much faster by accessing our knowledge base instantly. Great product!",
    name: "Arun Mehta",
    position: "Customer Success Lead",
    company: "GrowthPartners"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-bee-navy text-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="text-bee-yellow font-medium">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            From Our Customers
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Hear what businesses across India are saying about QueryBee
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 text-5xl text-bee-yellow opacity-20">
            <Quote size={64} />
          </div>
          
          <div className="testimonial-slider relative overflow-hidden h-80">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-all duration-300 flex flex-col justify-center ${
                  index === currentIndex 
                    ? "opacity-100 translate-x-0" 
                    : index < currentIndex 
                      ? "opacity-0 -translate-x-full" 
                      : "opacity-0 translate-x-full"
                }`}
              >
                <p className="text-xl md:text-2xl italic mb-8 text-center">
                  "{testimonial.text}"
                </p>
                <div className="text-center">
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-bee-yellow">{testimonial.position}</p>
                  <p className="text-gray-300 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center space-x-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:text-white hover:border-gray-400 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-bee-yellow w-4" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:text-white hover:border-gray-400 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
