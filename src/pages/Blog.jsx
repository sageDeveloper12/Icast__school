import { posts, submenu,heroImage } from "../data";
import Subheader from "../components/subheader/Subheader";
import { Link } from "react-router-dom";


const Blog = () => {
  return (
    <>
    <Subheader name = "blog" image ={heroImage[3]} />
    <div className="news section">
      <h2>News</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quo fugit hic odit!</p>
       <div className="news__container container">
          <section  className="post__container">
          {
            posts.map(({id, image, title,time,category,text})=>( 
           <div className = 'post' key = {id}>
                <div  className="image__container">
                   <img src={image} alt="post image" />
                </div>
                <div className="post__details">
                <h2 className="title">{title}</h2>
                <div className="post__time">
                   <p>{time}</p>
                   <p>{category}</p>
                </div>
                <div className="post__text">
                  <p>{text}</p>
                </div>
             </div>
             <Link to ={`/blog/${id}`}><button className="btn more">Read More</button></Link>
             </div>
            ))
          }
          </section> 
       </div>
    </div>
    </>
  )
}

export default Blog