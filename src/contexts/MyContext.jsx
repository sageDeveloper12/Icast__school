// src/contexts/MyContext.js
import React, { createContext, useState, useCallback } from 'react';

// Create a Context
const MyContext = createContext();

// Create a Provider Component
const MyProvider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [items, setItems] = useState([]); // This will hold the slider items

  const setSliderItems = useCallback((newItems) => {
    setItems(newItems);
    setCurrentIndex(0);
  }, [setItems, setCurrentIndex]);

  const nextSlide = () => {
    if (items.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  return (
    <MyContext.Provider value={{ currentIndex, nextSlide, prevSlide, setSliderItems, items }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyProvider, MyContext };
