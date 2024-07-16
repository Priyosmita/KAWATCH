import { useState, useEffect, useRef } from 'react';
import '../globals.css';


const testimonials = [
  {
    image: 'https://ibighit.com/bts/images/profile/proof/member/bts-m.jpg',
    text: 'This is a great product! I highly recommend it.',
    name: 'John Doe',
  },
  {
    image: 'https://ibighit.com/bts/images/profile/proof/member/bts-m.jpg',
    text: 'Amazing experience, will definitely use again.',
    name: 'Jane Smith',
  },
  {
    image: 'https://ibighit.com/bts/images/profile/proof/member/bts-m.jpg',
    text: 'Amazing experience, will definitely use again.',
    name: 'Baba Yaga',
  },
  // Add more testimonials as needed
];


// Duplicate the first testimonial and add it at the end
const extendedTestimonials = [...testimonials, testimonials[0]];


const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);


  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };


  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };


  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };


  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transition = 'transform 0.5s ease-in-out';
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);


  const handleTransitionEnd = () => {
    if (currentIndex === extendedTestimonials.length - 1) {
      setCurrentIndex(0);
      if (sliderRef.current) {
        sliderRef.current.style.transition = 'none';
        sliderRef.current.style.transform = 'translateX(0)';
        // Force reflow
        void sliderRef.current.offsetHeight;
        sliderRef.current.style.transition = 'transform 0.5s ease-in-out';
      }
    }
  };


  return (
    <div className="relative flex justify-center items-center w-full h-64 rounded-3xl overflow-hidden shadow-md bg-opacity-30 bg-white">
      <button
        onClick={prevTestimonial}
        className="absolute left-0 ml-4 p-2 rounded-full shadow-md hover:bg-gray-200 z-10 h-10 w-10 flex justify-center items-center"
      >
        &lt;
      </button>
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <div
          ref={sliderRef}
          className="flex w-full h-full"
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedTestimonials.map(({ image, text, name }, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex flex-col items-center text-center"
              style={{ minWidth: '100%' }}
            >
              <img src={image} alt={name} className="w-24 h-24 rounded-full object-cover mb-4 mt-6" />
              <p className="text-lg font-semibold mb-2">{text}</p>
              <p className="text-sm text-white">{name}</p>
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 flex space-x-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 w-2 rounded-full cursor-pointer ${
                index === (currentIndex % testimonials.length) ? 'bg-gray-800' : 'bg-gray-400'
              }`}
            ></span>
          ))}
        </div>
      </div>
      <button
        onClick={nextTestimonial}
        className="absolute right-0 mr-4 p-2 rounded-full shadow-md hover:bg-gray-200 z-10 h-10 w-10 flex justify-center items-center"
      >
        &gt;
      </button>
    </div>
  );
};


export default TestimonialSlider;