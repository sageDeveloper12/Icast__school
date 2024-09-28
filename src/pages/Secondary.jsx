import { useState, useEffect } from "react";
import Header from "./Header";
import { primaryOffers } from "../components/KindagartenSubject";
import { secondarySchoolImage, posts, subjects, subjects2} from "../data";


const Secondary = () => {
    const [imageUrl, setImageUrl] = useState(secondarySchoolImage[0]);
    const [activeTab, setActiveTab] = useState("news");

    const threePost = posts.slice(0, 3);
    
    const handleClick = (tab) => {
        setActiveTab(tab);
    };

    const getRandomImages = () => {
        const randomIndex = Math.floor(Math.random() * secondarySchoolImage.length);
        return secondarySchoolImage[randomIndex];
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setImageUrl(getRandomImages());
        }, 500);

        return () => clearInterval(intervalId);
    }, []);

    return (
            
            <div className="secondary section">
                
                <div className="secondary__container">
                    <section className="hero">
                    <div className="hero__background"></div>
                    <div className="hero__content">
                        <h1>Welcome to Our secondary School</h1>
                        <p>Providing quality education and a nurturing environment.</p>
                    
                    </div>
                 </section>
                    <section className="section secondary__offer">
                        <div className="offer__container container">
                            <div className="offer__wrapper">
                                {primaryOffers.map((offer) => (
                                    <div key={offer.id} className="offer">
                                        <div className="icon">
                                            {offer.icon}
                                        </div>
                                        <div className="text">
                                            <h3>{offer.title}</h3>
                                            <p>{offer.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    <section className="school__overview section">
                        <div className="school__overview-container container">
                            <div className="left box">
                                <div className="image__container">
                                    <img src={imageUrl} className="main__image" alt="" />
                                    <img src={imageUrl} alt="" className="small__image" />
                                </div>
                            </div>
                            <div className="right box">
                                <h3>Lorem ipsum dolor sit amet.</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ratione vitae, non laborum quia velit.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ratione vitae, non laborum quia velit.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ratione vitae, non laborum quia velit.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ratione vitae, non laborum quia velit.</p>
                            </div>
                        </div>
                    </section>
                    <section className="apply section">
                        <div className="apply__container container">
                            <p>Apply for Admission</p>
                            <button className="btn apply__btn">Apply</button>
                        </div>
                    </section>
                    <section className="tabs section">
                        <div className="tabs__container container">
                            <div className="tab__buttons">
                                <button className={`tab__button ${activeTab === "news" ? "active" : ""}`} onClick={() => handleClick("news")}>News</button>
                                <button className={`tab__button ${activeTab === "events" ? "active" : ""}`} onClick={() => handleClick("events")}>Events</button>
                                <button className={`tab__button ${activeTab === "subjects" ? "active" : ""}`} onClick={() => handleClick("subjects")}>Subjects</button>
                            </div>
                            <div className="tab__content">
                                {activeTab === "news" && (
                                    <div className="news content__tab">
                                        <div className="news__container container">
                                            <div className="post__container">
                                                {threePost.map((post) => (
                                                    <div className="post" key={post.id}>
                                                        <div className="image__container">
                                                            <img src={post.image} alt="post image" />
                                                        </div>
                                                        <div className="post__details">
                                                            <h2 className="title">{post.title}</h2>
                                                            <div className="post__time">
                                                                <p>{post.time}</p>
                                                                <p>{post.category}</p>
                                                                <p>{post.noOfComment}</p>
                                                            </div>
                                                            <div className="post__text">
                                                                <p>{post.text}</p>
                                                            </div>
                                                        </div>
                                                        <button className="btn more">Read More</button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {activeTab === "subjects" && (
                                    <div className="subjects tab__content">
                                        <div className="subject__container container">
                                            {subjects2.map((subject, index) => (
                                                <div className="subject" key={index} style={{ background: `url(${subject.image})` }}>
                                                    <div className="title">
                                                        <h3>{subject.name}</h3>
                                                    </div>
                                                    <div className="text">
                                                        <p>{subject.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {activeTab === "events" && (
                                    <div className="events tab__content">
                                        <h2>Events Content</h2>
                                        <p>No events to display at the moment.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
       
    );
};

export default Secondary;
