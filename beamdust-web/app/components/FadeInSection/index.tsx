'use client'
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const FadeInSection = ({ children, delay }: { children: React.ReactNode, delay: number }) => {
  const { ref, inView } = useInView({ triggerOnce: false });
  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`transition-all  delay-${delay} duration-1000 ease ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
