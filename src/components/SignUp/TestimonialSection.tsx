import { useState, useEffect } from "react";
import { ITestimonial } from "../../types/testimonial";
import TestimonialCard from "../testimonials";
import { testimonialsData } from "../testimonials/__testimonialsData";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [currentIndex]);

  return (
    <section>
      <div>
        <div className="flex gap-10 items-end mt-10 w-full">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
            >
              <path
                d="M60 29.9444L52.7455 22.6898L52.7505 22.6848L30.067 0L22.8432 7.22386L22.8333 7.21393L0 30.0486L9.35245 39.4022L9.35742 39.3973L29.9608 60L39.3142 50.6464L39.3063 50.6385L60 29.9444ZM25.3947 36.7276L36.7409 25.3813L41.2991 29.9395L29.9529 41.2859L25.3947 36.7276ZM23.266 34.5989L18.7109 30.0437L30.0581 18.6973L34.6132 23.2525L23.266 34.5989ZM37.251 48.4363L32.156 43.3412L50.6475 24.8493L55.7426 29.9444L37.251 48.4363ZM30.067 4.25849L48.493 22.6838L43.398 27.779L24.972 9.3536L30.067 4.25849ZM22.8333 11.4724L27.9283 16.5675L16.5821 27.9149L16.5643 27.8971L9.33459 35.1269L4.25743 30.0486L22.8333 11.4724ZM29.9608 55.7425L11.4871 37.2675L16.5821 32.1724L35.0558 50.6464L29.9608 55.7425Z"
                fill="white"
              />
            </svg>
          </span>
          <div className="w-full h-full overflow-x-scroll overflow-hidden scrollbar-hide">
            <div
              className="flex gap-5 w-96 transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonialsData.map((item: ITestimonial) => (
                <TestimonialCard
                  id={item.id}
                  name={item.name}
                  title={item.title}
                  message={item.message}
                  isLongMessage={item.isLongMessage}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 gap-10 top-1/2 transform -translate-y-1/2 flex justify-center w-full">
        <button
          className="top-1/2 transform -translate-y-1/2 bg-transparent font-bold"
          onClick={prevSlide}
        >
          {"←"}
        </button>
        <button
          className="top-1/2 transform -translate-y-1/2 bg-transparent font-bold"
          onClick={nextSlide}
        >
          {"→"}
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
