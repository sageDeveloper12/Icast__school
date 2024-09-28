
import Subheader from '../components/subheader/Subheader';
import { submenu,aboutImage } from '../data';




const About = () => {
  return (
    <div className="about__section">
      <div className="about__us-container">
        <section className='headings'>
            <Subheader name = {submenu[0].name}  image={submenu[0].image} />
        </section>
        <section className='history_section section'>
           <div className="history__container container">
            <div className="left">
                <h2>History</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta excepturi placeat itaque dolorum atque amet! Et assumenda, ipsam itaque voluptatibus enim rerum consequuntur omnis, dolore vel quas ea iste rem.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta excepturi placeat itaque dolorum atque amet! Et assumenda, ipsam itaque voluptatibus enim rerum consequuntur omnis, dolore vel quas ea iste rem.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta excepturi placeat itaque dolorum atque amet! Et assumenda, ipsam itaque voluptatibus enim rerum consequuntur omnis, dolore vel quas ea iste rem.</p>
            </div>
            <div className="right">
              <div className="image__container">
                <img src={aboutImage[3]} alt="" />
              </div>  
            </div>
          </div>

        </section>
        <section className='mission__section section'>
           <div className="mission__container container reverse">
            <div className="left">
                <h2>Mission</h2>
                <p>
                At ICAST, our mission is to foster a nurturing and inclusive environment for all students. We aim to inspire curiosity and a love for learning from <strong>kindergarten</strong> through <strong>secondary school</strong>. Our dedicated educators focus on developing critical thinking and creativity in every child. We provide a well-rounded curriculum that emphasizes academic excellence and personal growth. Our <strong>primary school</strong> program encourages collaboration and exploration in a supportive setting. In <strong>secondary school</strong>, we prepare students for future challenges and opportunities. Our <strong>hostel</strong> facilities create a safe and vibrant community for those who need accommodation. We are committed to holistic education that nurtures both mind and character. Together, we empower every student to reach their full potential. Join us in shaping the leaders of tomorrow!
                </p>
            </div>
            <div className="right">
              <div className="image__container">
                <img src={aboutImage[1]} alt="" />
              </div>  
            </div>
          </div>

        </section>
        <section className='vision__section section'>
           <div className="vision__container container">
            <div className="left">
                <h2>Vision</h2>
                <p>At ICAST school, we envision a vibrant learning community where every student is empowered to reach their full potential. We aim to cultivate a culture of curiosity, resilience, and inclusivity, preparing our students to thrive in a rapidly changing world. Our goal is to inspire lifelong learners who are equipped with the skills, values, and confidence to become compassionate leaders and responsible global citizens. Through holistic education and supportive environments, we strive to create a brighter future for all.</p>
            </div>
            <div className="right">
              <div className="image__container">
                <img src={aboutImage[2]} alt="vision_image" />
              </div>  
            </div>
          </div>

        </section>
        <section className='values__section section'>
           <div className="values__container container reverse">
            <div className="left">
                <h2>Values</h2>
                <p>At [School Name], we are committed to fostering a culture of respect, integrity, and excellence. We value inclusivity, ensuring that every student feels welcomed and valued. We believe in the power of collaboration, encouraging teamwork and communication among students, staff, and families. Lifelong learning is at the core of our mission, inspiring curiosity and personal growth. We prioritize compassion and empathy, guiding our students to be responsible and caring global citizens. Through these values, we aim to create a supportive environment where every individual can thrive and contribute to the community.</p>
            </div>
            <div className="right">
              <div className="image__container">
                <img src={aboutImage[2]} alt="" />
              </div>  
            </div>
          </div>

        </section>
      </div>
    </div>

  )
}

export default About