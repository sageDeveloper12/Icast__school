// src/components/Slider.js
import React, { useContext } from 'react';
import { MyContext } from '../contexts/MyContext';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';

const Slider = () => {
  const { currentIndex, nextSlide, prevSlide, items } = useContext(MyContext);

  if (items.length === 0) return null; // Return nothing if there are no items

  const { image, title, description } = items[currentIndex];

  return (
    <div className="slider">
      <button className='prev' onClick={prevSlide}><FaLessThan className='icon' /></button>
      <div className="slider__content">
        {image && <img src={image} alt={title} />}
        <div className="slider__text">
          {title && <h3>{title}</h3>}
          {description && <p>{description}</p>}
        </div>
      </div>
      <button className='next' onClick={nextSlide}><FaGreaterThan className='icon' /></button>
    </div>
  );
};

export default Slider;
