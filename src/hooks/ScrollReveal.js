import React, { useEffect, useRef } from 'react';
import "animate.css";

const ScrollReveal = ({
  children,
  animationName = 'animate__fadeIn',
  threshold = 0.1,
  duration = '1s',
}) => {
  const elementRef = useRef();

  useEffect(() => {
    const currentRef = elementRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', animationName);
            entry.target.style.opacity = 1;
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: threshold,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animationName, threshold]);

  return <div ref={elementRef} style={{ opacity: 0 }}>{children}</div>;
};

export default ScrollReveal;

