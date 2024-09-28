import { Link } from "react-router-dom";
import { kindagartenOffers, kindagartenGallery} from "../data";
import {kindagartensubjects, kindagartResource} from "../components/KindagartenSubject";
import { MdChildCare } from "react-icons/md";
import { FaChildren } from "react-icons/fa6";
import { useState } from "react";
import background from '../assets/images/activities/kindagarten/DSC_7673.JPG'
import Subheader from "../components/subheader/Subheader";
import {motion} from 'framer-motion'






const Kindargaten = () => {
    const [hoveredId, setHoveredId] = useState(null);

    console.log("Hovered ID:", hoveredId);
  return (
    <>
    <Subheader image={background} name = "Kindagarten"/>
    <div className = 'kindagarten'>
        <div className="kindagarten__container container">
        <header className="kindagarten__header section">
        <div className="container">
          <h1>Welcome to Kindergarten</h1>
          <p>Discover our engaging programs, resources, and exciting offers for young learners.</p>
        </div>
      </header>
      
            <section className="categories__section section section">
                <div className="categories__section-container container">
                <div className="left box">
                    <div className="icon">
                    <MdChildCare/>
                    </div>
                    <h2>Preschool</h2>
                    <p>Our preschool program creates a warm and engaging environment for young learners. We encourage exploration and creativity through play-based activities that foster both social and cognitive development.</p>
                    <p>Children participate in hands-on experiences that promote curiosity and learning. Our caring educators guide each child in developing essential skills while forming lasting friendships in a supportive atmosphere.</p>
                </div>
                <div className="right box">
                    <div className="icon">
                        <FaChildren/>
                    </div>
                    <h2>Kindargeten</h2>
                    <p>Our preschool program offers a nurturing environment where children can explore and learn. We emphasize creativity and social skills through engaging activities that inspire curiosity and growth!</p>
                    <p>In this supportive setting, children develop essential skills while forming friendships. Our dedicated educators guide each child, ensuring they thrive in a playful and enriching atmosphere!</p>
                </div>`
                </div>    
            </section>
            <section className="kindagarten__subjects section">
                <div className="kindagarten__subject-container container">
                    {
                    kindagartensubjects.map((subject, index)=>(
                        <div className="subject" key={index}
                         onMouseEnter={() => setHoveredId(subject.id)}
                         onMouseLeave={() => setHoveredId(null)}
                        >
                           <div className="icon">
                            {subject.icon}
                           </div>
                           <p>{subject.title}</p>
                        </div>
                    ))
                }
                </div>
            </section>

            <section className="offers section">
                <div className="Kindagarten__offers-container container"
                >
                    {
                     
                     kindagartenOffers.map((kindagartenOffer) => (
                            <div key = { kindagartenOffer.id}
                             className="kindagarten__offer"
                             style={{backgroundColor : hoveredId === kindagartenOffer.id ? kindagartenOffer.color:'white' }}>
                                <div className="heading">
                                    <h1><span>{kindagartenOffer.title}</span></h1>
                                </div>
                                <div className="text">
                                    {kindagartenOffer.text}  
                                </div>
                                <button className="btn more">ReadMore</button>
                            </div>
                        ))
                      
                    }
                </div>
            </section>

            <section className="kindagarten__resources section">
                <motion.div className="kindagarten__resources-container container"
                   initial={{ x: '-100%' }} // Start off-screen to the left
                   animate={{ x: '0%' }} // Move to the center
                   exit={{ x: '100%' }} // Exit to the right
                   transition={{
                       duration: 5, // Adjust duration for speed
                       ease: 'linear',
                       repeat: Infinity,
                       repeatType: 'loop',
                   }}
                >
                    {
                   kindagartResource.map((resource, index)=>(
                        <div className="resource" key={index}>
                           <div className="icon">
                            {resource.icon}
                           </div>
                           <p>{resource.title}</p>
                        </div>
                    ))
                }
                </motion.div>
            </section>
            <section className="gallery section">
                <div className="kindargaten__gallery-container">
                    {
                    kindagartenGallery.map((image, index)=>(
                            <div key = {index}className="image__container">
                                 <img src={image} alt="" />
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    </div>
    </>
  )
}

export default Kindargaten