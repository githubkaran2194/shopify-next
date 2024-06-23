'use client'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSComponents = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return null;
};

export default AOSComponents;
