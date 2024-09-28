import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import '../index.css';
import logo from '../assets/images/logo.png'
import { IoIosClose } from "react-icons/io";
import { FaBars } from "react-icons/fa";


const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isShowing, setIsHowing] = useState(false)

  const handleToggle = (prev) =>{
    setIsHowing(!prev)
    console.log("clicked")
  }
  const handleScroll = () =>{
    setScrollY(window.scrollY)
    console.log(scrollY)
  }

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);

    return ()=>{
      window.removeEventListener("scroll", handleScroll)
    }
  })
   
  return (
    <section className="header">
      <div className="header__container" >
        <div className="topbar">
          <div className="left__side">
              <div className="time">
                <p><IoIosTime /> Opening Hours: 8: 00 - 18:00 Mon-Sat </p>
              </div>
              <div className="socials"> 
              <a href=""><FaFacebookF /></a>
              <a href=""><FaTiktok /></a>
              <a href=""><FaInstagram /></a>
          </div>
          </div>
          <div className="right__side">
           <button className="btn">
            <Link to= '/portal'>Portal</Link>
           </button>
          </div>
        </div> 
        <div className={`nav__container ${scrollY > 15 ? 'scrolled' : 0}`}>
            <div className="logo">
              <img src={logo} alt="" />
              <p>ICAST <span>School</span></p>
            </div>
            <div className='nav__menu'>
              <ul className={`nav__links ${isShowing ? "show__nav":"hide__nav"}`}>
                <li><Link to= "/">Home</Link></li>
              <li className='nav__link'>
                  <Link to="/about" className="dropdown">About</Link>
                  <ul className='dropdown__menu about__dropdown'>
                    <li className='dropdown__list'><Link to="/about">About-us</Link></li>
                    <li className='dropdown__list'><Link to = "/facilities">Facilities</Link></li> 
                    <li className='dropdown__list'><Link to = "/hostel">Hostel</Link></li>
                    <li className='dropdown__list'><Link to = '/faq'>FAQ</Link></li>
                  </ul>
                </li>
                <li className='nav__link'>
                  <Link to="/classes" className="dropdown">Academics</Link>
                  <ul className="dropdown__menu academic__dropdown">
                    <li className='dropdown__list'><Link to="/kindagarten">Kindergarten</Link></li>
                    <li className='dropdown__list'><Link to="/primary">Primary</Link></li>
                    <li className='dropdown__list'><Link to = "/secondary">Secondary</Link></li>
                  </ul>
                </li>
                <li className='nav__link'><Link to = "/admission" className = "nav__link">Admission</Link></li>
                <li className='nav__link'><Link to = "/activities" className = "nav__link">Activities</Link></li>
                <li className='nav__link'><Link to = "/blog" className = "nav__link">News</Link></li>
                <li className='nav__link'><Link to = "/contacts" className = "nav__link">Contacts</Link></li>
              </ul>
              <button className='toggle' onClick={()=>handleToggle(isShowing)}>
                  {
                    isShowing ? <IoIosClose /> : <FaBars />
                  }
              </button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Header