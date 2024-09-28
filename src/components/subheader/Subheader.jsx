import './subheader.css';
import { Link } from 'react-router-dom';

const Subheader = ({name, image}) => {
  return (
    <section className="subheader section" style={{ backgroundImage: `url(${image})` }}>
         <div className='subheader__container container'>
        <h2><Link to ="/">HOME</Link>/{name}</h2>
    </div>
    </section>
   
  )
}

export default Subheader