import React from 'react';
import { Link } from 'react-router-dom';
import { hostel,hostelImage } from '../data';
import { IoCall } from "react-icons/io5";
import { FaWpforms } from "react-icons/fa6";



const Hostel = () => {
  return (
    <main className="hostel">
      <section className="hostel__details container ">
        <div className="left">
          <div className="image__container">
            <img src={hostel.image} alt="Hostel" width="500px" height="400px" />
          </div>
          <div className="description">
            <h2>Description</h2>
            <p>{hostel.description}</p>
          </div>
          <div className="hostel__overview">
            <div className="features">
              <h2>Features</h2>
              <ul className="feature__lists">
                {hostel.features.map((feature, index) => (
                  <li className="feature" key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="facility">
              <h2>Facilities</h2>
              <ul className="facility__lists">
                {hostel.facilities.map((facility, index) => (
                  <li key={index}>{facility}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="offer">
            <ul className="offer__lists">
              {hostel.offers.map((offer, index) => (
                <li className="offer" key={index}>{offer}</li>
              ))}
            </ul>
          </div>
          <div className="hostel__contact">
            <h4>Contact Us</h4>
            <IoCall className='hostel__contact-icon'/>
            <button>Contact</button>
          </div>
          <div className="hostel__apply">
            <h4>Click on the button below to start the application</h4>
            <FaWpforms className='hostel__apply-icon' />
            <button><Link to = '/admission'>Apply</Link></button>
          </div>
        </div>
      </section>

      <section className="gallery section">
          <h2>TAKE A CLOSER LOOK</h2>
         <div className="gallery__container container">
              {
                hostelImage.map((image, index)=>(
                  <div className="image__container" key={index}>
                    <img src={image} alt="hostel image" width="400px" height="350px" />
                  </div>
                ))
              }
        </div>
      </section>
    </main>
  );
}

export default Hostel;
