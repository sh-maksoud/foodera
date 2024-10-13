import img1 from '/images/sandwich.jpg';
import img2 from '/images/Burger.jpg';
import img3 from '/images/Toast.jpg';

import './Explore.css';

function Explore() {
    const exploreItems = [
        {
            image: img1,
            title: "Rainbow Vegetable Sandwich",
            Time: "15 - 20 Minutes | Serves: 1",
            newPrice: "$10.50",
            oldPrice: "$11.70",
            
        },
        {
            image: img2,
            title: "Vegetarian Burger",
            Time: "30 - 45 Minutes | Serves: 1",
            newPrice: "$9.20",
            oldPrice: "$10.50",
        },
        {
            image: img3,
            title: "Raspberry Stuffed French Toast",
            Time: "10 - 15 Minutes | Serves: 1",
            newPrice: "$12.50",
            oldPrice: "$13.20",
        },
    ];

    const exploreItemElements = exploreItems.map((item, index) => {
        return (
            <div className="col-md-4 col-sm-6" key={index}>
                <div className="card">
                    <img src={item.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.Time}</p>
                        <div className="price-wrap h3">
                <span className="price-new">{item.newPrice}</span>
                <del className="price-old">{item.oldPrice}</del>
            </div>
                    </div>
                </div>
                <button href="#">Order Now</button>
            </div>
        );
    });

    return (
        <div>
            <div className="explore" id='explore'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h2>Explore Our Foods</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {exploreItemElements}
                </div>
            </div>
        </div>
    );
}

export default Explore;
