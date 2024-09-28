import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa";
import { BsFillTelephoneMinusFill } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";


const Footer = () => {
  return (
    <section>
      <div className="footer__container container">
          <div className="school__info">
            <div className="logo">
              <img src={logo} alt="school logo" />
              <p>BAWUJ <span>SCHOOL</span></p>
            </div>
            <div className="text">
              <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur  adipisicing elit. Blanditiis
              dipisicing elit. Blanditiis aut suscipit earum mollitia. Porro, dolores?</p>
            </div>
         
            <div className="socials">
              <ul>
                <li><Link><FaFacebookF/></Link></li>
                <li><Link><FaTiktok/></Link></li>
                <li><Link><FaInstagram /></Link></li>
              </ul>
            </div>
        </div>
        <div className="quick__links">
          <h2>Quick Links</h2>
            <ul>
              <li>Classes</li>
              <li>Gallery</li>
              <li>Events</li>
              <li>News</li>
              <li>portal</li>
              <li>Admission</li>
            </ul>
        </div>
        <div className="contact__us">
          <h2>Contact Us</h2>
            <div className="text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum eveniet iusto nemo est consequuntur repellendus expedita cupiditate, libero exercitationem magnam debitis id molestiae fugiat!
            </div>
            <div className="contact__info">
              <p><FaAddressBook className='icon'/><span>Lorem, ipsum dolor adipisicing elit.Tempore dolore quam commodi corporis voluptatu.</span></p>
              <p><BsFillTelephoneMinusFill className='icon'/><span>959553-306464</span></p>
              <p><MdMarkEmailUnread className='icon'/><span>ddhdgfdhd@hdgfgfgf</span></p>
            </div>

        </div>
      </div>
    </section>
  )
}

export default Footer