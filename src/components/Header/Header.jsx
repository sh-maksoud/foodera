import './Header.css';

function Header() {
  return (
    <header>
      <div className="container" id="home">
        <div className="row">
          <div className="col-md-6">
            <h2>Good food choices are good investments.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
            <button>Order Now <span className="fa fa-shopping-basket"></span></button>
            <button>Learn More <i className="fas fa-chevron-right"></i></button>
          </div>
          <div className="col-md-6" id="header-img">
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
