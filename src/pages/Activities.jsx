import { useState } from 'react';
import {mainActivities,fullGallery} from '../data';



const Activities = () => {

  const [activeTab, setActiveTab] = useState("")

  const handleClick = (tab) =>{
    setActiveTab(tab)
  }
  return (
    <main className="activities">
      <div className="activities__container">
        <section className="activities__categories section">
          <div className="activities__categories__container container">
             {
              mainActivities.map((activity,index)=>(
                 <div className="card" key={index}>
                    <div className="upper__content">
                      <h3>{activity.mainTitle}</h3>
                      <div className="image__container">
                      <img src={activity.image} alt="" width= '370px' height= "320px" />
                      </div>
                     <p>{activity.mainDescription}</p>
                    </div>
                    <div className="lower__content">
                      {
                      activity.subActivities.map((subActivity,index)=>(
                        <div className="subactivity__container" key={index}>
                        <h4>{subActivity.title}</h4>
                        <p>{subActivity.description}</p>
                        </div>
                        
                      ))
                    }
                    </div>
                 </div>
              ))
             }
          </div>
        </section>
        <section className="gallery section">
          <div className="gallery__container container">
            <div className="activity__tabs tabs__container">
              <div className="activities__tabs-button tabs__buttons">
                <button className='activity__tab-btn tab__button' onClick={()=>handleClick("academic")}>Academic Activities</button>
                <button className='activity__tab-btn tab__button' onClick={()=> handleClick("extracurricular")}>Extracurricular Activities</button>
                <button className='activity__tab-btn tab__button'onClick={()=>handleClick("celebration")}>School Celebration</button>
                <button className='activity__tab-btn tab__button' onClick={()=>handleClick("events")}>Special Events</button>
              </div>
              {
                 activeTab === "academic" && (
                  <div className="image__wrapper">
                    {fullGallery.academy.map((image, index) => (
                      <img className = "image" src={image} alt="gallery__image" key={index} height="400px" width = "400px"/>
                    ))}
                  </div>
               )
             }
              {
                 activeTab === "extracurricular" && (
                  <div className="image__wrapper">
                    {fullGallery.extracurricular.map((image, index) => (
                      <img className = "image" src={image} alt="gallery__image" key={index} height="400px" width = "400px"/>
                    ))}
                  </div>
               )
             }
              {
                 activeTab === "celebration" && (
                  <div className="image__wrapper">
                    {fullGallery.celebration.map((image, index) => (
                      <img className = "image" src={image} alt="gallery__image" key={index} height="400px" width = "400px"/>
                    ))}
                  </div>
               )
             }
              {
                 activeTab === "events" && (
                  <div className="image__wrapper">
                    {fullGallery.celebration.map((image, index) => (
                      <img className = "image" src={image} alt="gallery__image" key={index} height="400px" width = "400px"/>
                    ))}
                  </div>
               )
             }
             </div>
          </div>  
        </section>
      </div>
    </main>
  )
}

export default Activities