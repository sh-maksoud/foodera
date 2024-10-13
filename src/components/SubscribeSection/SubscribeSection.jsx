import './SubscribeSection.css'; 

const SubscribeSection = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h2>Hurry up! Subscribe our newsletter <br /> and get 25% Off</h2>
            <p>Limited time offer for this month. No credit card required.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12">
            <input type="email" placeholder="Email Address Here" />
            <button>
              <a href="#">Subscribe</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
