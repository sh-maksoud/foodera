
import './Intro.css';
import intoImg from '/images/1.png';
import into2Img from '/images/2.png';
function Intro() {
return (
    <div>
    <section className="intro" id='Intro'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={intoImg} alt="Intro" />
                    </div>
                    <div className="col-md-6">
                        <h2>We pride ourselves on making real food from the best ingredients. </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        <button src="#">Read More</button>
                    </div>
                </div>
            </div>
        </section>

        <section className="intro2">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>We make everything by hand with the best possible ingredients. </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

                        <ul className="list">
    <li>
        <i className="fas fa-check"></i>
        <span>Etiam sed dolor ac diam volutpat.</span>
    </li>
    <li>
        <i className="fas fa-check"></i>
        <span>Erat volutpat aliquet imperdiet.</span>
    </li>
    <li>
        <i className="fas fa-check"></i>
        <span>Purus a odio finibus bibendum.</span>
    </li>
</ul>


                        <button src="#">Read More</button>
                    </div>
                    <div className="col-md-6">
                        <img src={into2Img} alt="Intro" />
                    </div>
                </div>
            </div>
        </section>
    </div>
)
}

export default Intro;
