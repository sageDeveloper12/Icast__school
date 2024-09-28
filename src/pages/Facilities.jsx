import { facilities } from "../data";

const Facilities = () => {
  return (
    <main className="facilities">
      <div className="facilities__container container">
        <section className="facilities__box section">
          {
            facilities.map((facility, index) => (
            <div className="box" key={index}>
              <div className="left">
                <div className="content">
                  <h3>{facility.title}</h3>
                  <p>{facility.description}</p>
                </div>
                <div className="highlights">
                  <p>{facility.highlights[0]}</p>
                  <p>{facility.highlights[1]}</p>
                  <p>{facility.highlights[2]}</p>
                </div>
              </div>
              <div className="right">
                <div className="image__container">
                    <img src={facility.image} alt="facility__image" width= "450px" height= "300px"/>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Facilities;
