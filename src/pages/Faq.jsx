import { faqs } from '../data';
import { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";


const Faq = () => {
  // State to track which FAQ is currently open
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle the visibility of the answer
  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="faq">
      <div className="faq__container container">
      <h2>
          
          Frequently Asked Questions
        </h2>
        <div className="faq__wrapper">
          {faqs.map((faq, index) => (
            <div className="faq__box" key={index} onClick={() => handleClick(index)}>
              <h4><span>
              {openIndex === index ? <FaMinus /> : <FaPlus />}
          </span>{faq.question}</h4>
              <p className={openIndex === index ? 'visible' : 'hidden'}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Faq;
