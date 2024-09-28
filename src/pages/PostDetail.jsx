import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { posts } from '../data';

const PostDetail = () => {
  const { id } = useParams(); 
  const post = posts.find(post => post.id === parseInt(id)); // Find the post based on the ID

  if (!post) {
    return <p>Post not found</p>; // Handle case where post is not found
  }

  const { image, title, time, text,category } = post; // Destructure the post data
  const recentPost = posts.slice(0,3)
  return (
    <section className="post__detail">
      <div className="container post-detail__container">
        <div className="main__details">
          <div className="image__container">
             <img src={image} alt="post__detail-image" />
          </div>
          <div className="post__text">
            <h3>{title}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla assumenda repudiandae animi quos, iusto molestias eos expedita nesciunt officia. Vero doloribus debitis officia perspiciatis illo autem dolor iusto earum sint
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla assumenda repudiandae animi quos, iusto molestias eos expedita nesciunt officia. Vero doloribus debitis officia perspiciatis illo autem dolor iusto earum sint</p>
          </div>
          <div className="post__footer">
            <p>{time}</p>
            <p>{category}</p>
          </div>
        </div>
        <div className="post__sidebar">
          <div className="post__search">
            <h3>Search</h3>
            <hr />
            <input type="text"
            placeholder='search'
            name = 'search'
            value=""
             />
             <button>search</button>
          </div>
          <div className="post__categories">
            <h3>Categories</h3>
            <hr />
            <div className="content">
              <Link><p>Events</p></Link>
              <Link><p>Academic</p></Link>
              <Link><p>Facilities</p></Link>
            </div> 
          </div>
          <div className="recent__posts">
            <h3>Recent Posts</h3>
            {
              recentPost.map((recent, key)=>(
                <div className="recent__post-content" key={recent.id}>
              <div className="image__container">
                <img src={recent.image} alt="" width="20" height="80" />
              </div>
              <div className="recent__post-text">
                  <Link><p>{recent.category}</p></Link>
                  <p>{recent.time}</p>
              </div>
             </div>
          
              ))
            }
            </div>
          </div>
        </div>
    </section>
  );
};

export default PostDetail;
