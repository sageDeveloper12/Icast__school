import React, { useContext, useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../contexts/MyContext';
import {delay, motion} from 'framer-motion';
import {heroImage, classImage,schoolActivities,testimonials, gallery} from '../data';
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";
import { FaLowVision } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";
import { FaHelmetSafety } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { FaHouse } from "react-icons/fa6";
import { SiGoogleclassroom } from "react-icons/si";
import { MdOutlineSportsHandball } from "react-icons/md";
import { MdOutlineHotelClass } from "react-icons/md";
import { FaSchoolFlag } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";
import { LiaAwardSolid } from "react-icons/lia";
import { IoMdClose } from "react-icons/io";
import { useInView } from 'react-intersection-observer';


import Contact from '../components/contacts/Contact';

const Home = () => {

  const [isAnimating, setIsAnimating] = useState(false);
  const { currentIndex, nextSlide, prevSlide, setSliderItems, items } = useContext(MyContext);
  const [teacher, setTeacher] = useState(0);
  const [student, setStudent] = useState(0);
  const [location, setLocation] = useState(0);
  const [awards, setAward] = useState(0);
  const [modalOpen , setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const currentItem = schoolActivities[currentIndex] || schoolActivities[0];
  const { title, image, description } = currentItem;
   // Intersection Observer Hook
   const { ref: counterRef, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2, // Trigger when 10% of the element is in view
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: classRef, inView: classView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: aboutRef, inView: aboutView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: offerRef, inView: offerView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  

  const openModal = (index) =>{
    setModalIndex(index);
    setModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModel = () =>{
    setModalOpen(false)
    document.body.style.overflow = 'auto'
  }

  useEffect(() => {
    setSliderItems(heroImage.map((img, index) => ({ image: img, title: `Slide ${index + 1}`, description: 'Description here' })));
    console.log("i cant stop myself")
  }, [heroImage, setSliderItems]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); 
    }, 5000); 

    return () => clearInterval(interval); 
  }, [nextSlide]);

  useEffect(()=>{
    if(inView){
    const counters = [
      {endValue: 100, setCount:setTeacher},
      {endValue: 100, setCount:setStudent},
      {endValue: 100, setCount:setLocation},
      {endValue: 100, setCount:setAward}
    ]

      counters.forEach(({endValue, setCount})=> {
        const duration = 2000;
        const increment = endValue/ (duration/50);

        const interval = setInterval(()=>{
          setCount((prevState)=>{
            if(prevState >= endValue){
              clearInterval(interval)
              return endValue
            }
            return prevState + increment
          })
        },50)
      })
    

 }}, [inView])

 useEffect(() => {
  if (isAnimating) {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Match this to the duration of your exit transition
    return () => clearTimeout(timer);
  }
}, [isAnimating]);



//framer-animation

const flipVariant = {
  hidden:{
    rotateY: 180,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    }
  },
  visible:{
    rotateY: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  }
}

const backgroundVariants = {
  initial: {
    x: '100%',
    scale: 1.2,
    opacity: 0,
  },
  animate: {
    x: 0, 
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: {
    x: '-100%', 
    scale: 1.2,
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, 
    }
  }
};
  return (
    <section className="section home">
    <motion.section className="home__container container" style={{ backgroundImage: `url(${heroImage[currentIndex]})` }}
      variants={backgroundVariants}
      initial="initial"
      animate={isAnimating ? "exit" : "animate"}
      onAnimationComplete={() => {
        if (isAnimating) {
          // Reset animation state after exit
          setIsAnimating(false);
        }
      }}
    >
      <div className="hero__container">
        <motion.div className="hero__banner-text" initial={{y:-500}} animate={{y:0}} transition={{delay:1, type :"spring", stiffness: "400"}}>
          <h1>Welcome <span>ICAST SCHOOLS</span></h1>
          <p>Inspiring Excellence in Education from Kindergarten to Secondary School.</p>
        </motion.div>
        <button className='prev' onClick={prevSlide}><FaLessThan className='icon' /></button>
        <button className='next' onClick={nextSlide}><FaGreaterThan className='icon'/></button>
      </div>
    </motion.section>
      <section className="about">
        <motion.div className="about__container container"
        ref = {aboutRef}
        variants={containerVariant}
        animate = {aboutView ? "visible" : "hidden"}
        >
          <motion.div className="about__box mission"
          variants={flipVariant}>
            <div className="about__icon"><FaFlag className='icon'/></div>
            <div className="about__text">
              <h2>Mission</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Sit quaerat a, ipsa voluptates atque voluptatem!</p>
            </div>
          </motion.div>
          <motion.div className="about__box vision"
           variants={flipVariant}
          >
            <div className="about__icon"><FaLowVision className='icon' /></div>
              <div className="about__text">
                <h2>Vision</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Sit quaerat a, ipsa voluptates atque voluptatem!</p>
              </div>
          </motion.div>
          <motion.div className="about__box history"
          variants={flipVariant}
          >
            <div className="about__icon"><FaHistory className='icon' /></div>
              <div className="about__text">
                <h2>History</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Sit quaerat a, ipsa voluptates atque voluptatem!</p>
              </div>
          </motion.div>
          <motion.div className="about__box program"
          variants={flipVariant}
          >
            <div className="about__icon"><HiAcademicCap className='icon'/></div>
              <div className="about__text">
                <h2>Academics</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Sit quaerat a, ipsa voluptates atque voluptatem!</p>
              </div>
          </motion.div>
        </motion.div>
      </section>
      <section className="welcome__message section">
        <div className="welcome__message-container container">
          <div className="left">
            <h3>WELCOME TO ICAST SCHOOL</h3>
              <p>At ICAST School, we offer a comprehensive educational experience for all ages, including Kindergarten, Primary, and Secondary levels. Our nurturing environment supports every child's development, ensuring they thrive academically and socially.</p>
              <h3>Kindergarten</h3>
              <p>In our Kindergarten program, we focus on early childhood development through playful learning. Our dedicated teachers foster curiosity and creativity, laying a strong foundation for future education.</p>
              <h3>Primary</h3>
              <p>Our Primary School emphasizes a balanced curriculum that integrates core subjects with arts and physical education. We encourage critical thinking and collaboration, helping students develop a love for learning.</p>
              <h3>Secondary </h3>
              In Secondary School, we prepare students for future academic and career paths. Our rigorous curriculum includes a variety of subjects, allowing students to explore their interests while gaining essential skills for success.
          </div>
          <motion.div
        className="right"
        ref={imageRef}
        variants={flipVariant}
        initial="hidden"
        animate={imageInView ? "visible" : "hidden"}
        style={{ 
          transformOrigin: 'top' 
        }}
      >
        <div className="video__container">
            <video width="500" height="300" controls autoPlay  className='welcome__video'>
                <source src="/video/welcome.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
          
          </motion.div>
        </div>     
      </section>
      <section className='offers section'>
  <motion.div className="offer__container container"
    ref={offerRef}
    variants={containerVariant}
    animate={offerView ? 'visible' : 'hidden'}
  >
    <h2>WHAT WE OFFER</h2>
    <div className="offer__boxes">
      <div className="left__side">
        <motion.div className="offer__card" variants={flipVariant}>
          <div className="offer__icon">
            <FaHouse className='icon' />
          </div>
          <div className="offer__text">
            <h3>Accommodation</h3>
            <p>Our school provides comfortable and safe accommodation options for students who require it, ensuring a home-like environment that fosters learning and personal growth.</p>
          </div>
        </motion.div>
        <motion.div className="offer__card" variants={flipVariant}>
          <div className="offer__icon">
            <FaHelmetSafety className='icon' />
          </div>
          <div className="offer__text">
            <h3>Safety</h3>
            <p>Your child's safety is our top priority. We implement strict safety protocols and have dedicated staff to ensure a secure learning environment for all students.</p>
          </div>
        </motion.div>
        <motion.div className="offer__card" variants={flipVariant}>
          <div className="offer__icon">
            <GiTeacher className='icon' />
          </div>
          <div className="offer__text">
            <h3>Certified Teachers</h3>
            <p>Our team of certified teachers is dedicated to providing a high-quality education, with a focus on nurturing each child's unique talents and abilities across all levels of education.</p>
          </div>
        </motion.div>
      </div>
      <div className="right__side">
        <motion.div className="offer__card" variants={flipVariant}>
          <div className="offer__icon">
            <SiGoogleclassroom className='icon' />
          </div>
          <div className="offer__text">
            <h3>Sufficient Classrooms</h3>
            <p>We boast spacious and well-equipped classrooms that accommodate various teaching styles, ensuring all students receive the attention and resources they need to thrive.</p>
          </div>
        </motion.div>
        <motion.div className="offer__card" variants={flipVariant}>
          <div className="offer__icon">
            <MdOutlineSportsHandball className='icon' />
          </div>
          <div className="offer__text">
            <h3>Sports Facilities</h3>
            <p>Our school is equipped with excellent sports facilities that encourage physical activity and teamwork, helping students develop a healthy lifestyle while enjoying various sports.</p>
          </div>
        </motion.div>
        <motion.div className="offer__card" variants={flipVariant}>
          <div className="offer__icon">
            <MdOutlineHotelClass className='icon' />
          </div>
          <div className="offer__text">
            <h3>Quality Classrooms</h3>
            <p>We provide high-quality learning environments that inspire creativity and collaboration, fostering an atmosphere where students feel motivated to learn and excel.</p>
          </div>
        </motion.div>
      </div>
    </div>
  </motion.div>
</section>

      <section className="subscribe">
        <div className="subscribe__container contaimer">
          <div className="subscribe__text">
            <h2>Subscribe To Our Newsletter</h2>
          </div>
          <div className="subscribe__form">
            <form className='form'>
              <input type="text " placeholder='Your email address' />
              <button className='subscribe__btn'>Subscribe</button>
            </form>
          </div>
        </div>
      </section>
      <section className="section">
  <div className="class__container container">
    <div className="class__heading">
      <h2>OUR CLASSES</h2>
    </div>
    <motion.div
      className="class__boxes"
      ref={classRef}
      variants={containerVariant}
      initial="hidden"
      animate={classView ? "visible" : "hidden"}
    >
      <motion.div className="class__box" variants={flipVariant}>
        <div className="class__image">
          <img src={classImage[0]} alt="DayCare" />
        </div>
        <div className="class__text">
          <h3>DayCare</h3>
          <p>Our DayCare program provides a safe and nurturing environment for young children. We focus on socialization, play, and early learning to prepare them for kindergarten.</p>
        </div>
        <button className='class__button btn more'>Read More</button>
      </motion.div>

      <motion.div className="class__box" variants={flipVariant}>
        <div className="class__image">
          <img src={classImage[1]} alt="Kindergarten" />
        </div>
        <div className="class__text">
          <h3>Kindergarten</h3>
          <p>Our Kindergarten program emphasizes foundational skills in literacy and numeracy while promoting creativity and critical thinking. Children engage in hands-on activities that foster a love for learning.</p>
        </div>
        <button className='class__button btn more'>Read More</button>
      </motion.div>

      <motion.div className="class__box" variants={flipVariant}>
        <div className="class__image">
          <img src={classImage[2]} alt="Primary" />
        </div>
        <div className="class__text">
          <h3>Primary</h3>
          <p>In our Primary classes, students develop essential skills across subjects like Math, Science, and Language Arts. Our curriculum encourages collaboration and critical thinking through project-based learning.</p>
        </div>
        <button className='class__button btn more'>Read More</button>
      </motion.div>

      <motion.div className="class__box" variants={flipVariant}>
        <div className="class__image">
          <img src={classImage[3]} alt="Secondary" />
        </div>
        <div className="class__text">
          <h3>Secondary</h3>
          <p>The Secondary program prepares students for higher education and future careers. We offer a rigorous curriculum with a focus on critical analysis, problem-solving, and real-world applications.</p>
        </div>
        <button className='class__button btn more'>Read More</button>
      </motion.div>
    </motion.div>
  </div>
</section>
<section className="school__activities section">
          <div className="school__activities-container container">
            <h2>SCHOOL ACTIVITIES</h2>
            <div className="activities__boxes">
              <div className="left__side">
                <img src= {image} alt="" />
              </div>
              <div className="right__side">
                <h3>{title}</h3>
                <p>{description}</p>
                <button className="btn more">Read More</button>
              </div>
            </div>
          </div>
          <FaLessThan className='less icon'/>
          <FaGreaterThan className='great icon'/>
      </section>
  
     <section className='counter section' ref ={counterRef}>
        <div className="counter__container container">
          <div className="counter">
            <GiTeacher className='icon'/>
            <h3>Certified Teachers</h3>
            <p>{Math.floor(teacher)}</p>
          </div>
          <div className="counter">
            <FaSchoolFlag className='icon'/>
            <h3>Location</h3>
            <p>{Math.floor(location)}</p>
          </div>
          <div className="counter">
            <PiStudentBold className='icon' />
            <h3>Student</h3>
            <p>{Math.floor(student)}</p>
          </div>
          <div className="counter">
            <LiaAwardSolid className='icon' />
            <h3>Awards</h3>
            <p>{Math.floor(awards)}</p>
          </div>
        </div>
     </section >

     <section className="gallery section">
        <div className="gallery__container container">
            <h2>GALLERY</h2>
            <div className="gallery__wrapper">
                {
                  gallery.map((image, index)=>(
                     <div className="image__container" key = {index}>
                        <img src={image} alt="" onClick={()=>{openModal(index)}} width="350px" height="300px" />
                     </div>
                  ))
                }
            </div>
                {
                  modalOpen && (
                    <div className="modal">
                       <span>
                          <IoMdClose className='close__icon modal__icon' onClick={closeModel}/>
                       </span>
                       <span>
                          <FaLessThan className='prev__icon modal__icon' onClick={prevSlide}/>                       
                       </span>
                       <img src={gallery[modalIndex]} alt="Enlarged image" />
                       <span>
                          <FaGreaterThan className='next__icon modal__icon' onClick={nextSlide} />
                       </span>
                    </div>
                  )
                }
        </div>
     </section>
     <section className="testimonial section">
      <div className="testimonial__container container">
       {testimonials.map((testimonial) => (
      <div key={testimonial.id} className="testimonial__item">
        <div className="text__container">
          <p>{testimonial.text}</p>
        </div>
        <div>
          <div className="profile">
            <div className="image__container">
              <img src={testimonial.image} alt="Testimonial" />
            </div>
            <div className="circle"></div>
            <div className="profile__text">
              <p>Lorem, ipsum.</p>
              <p>Lorem, ipsum.</p>
            </div>
          </div>
         
        </div>
        
      </div>
    ))}
  </div>
</section>
<section className="home__contact section">
  <h2>CONTACT-US</h2>
  <Contact/>  
</section>
</section>
  )
}

export default Home