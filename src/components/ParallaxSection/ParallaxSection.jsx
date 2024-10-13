import './ParallaxSection.css'; 

const ParallaxSection = () => {
  return (
    <section className="parallax-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h2>Baked fresh daily by bakers with passion.</h2>
            <div className="button-container">
              <button>
                <a href="#"><i className="fas fa-play"></i>Learn More</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;
