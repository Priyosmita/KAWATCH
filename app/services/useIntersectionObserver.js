// useIntersectionObserver.js
import { useState, useEffect } from 'react';

const useIntersectionObserver = (options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      options
    );

    const target = document.querySelector('#chart-container'); // Or use a ref to target specific elements
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [options]);

  return isIntersecting;
};

export default useIntersectionObserver;
