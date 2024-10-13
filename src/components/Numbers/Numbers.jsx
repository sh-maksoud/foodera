
import { useEffect, useState } from 'react';
import './Numbers.css';

function Numbers() {
    const [savings, setSavings] = useState(0);
    const [photos, setPhotos] = useState(0);
    const [rockets, setRockets] = useState(0);
    const [globes, setGlobes] = useState(0);

    useEffect(() => {
        const duration = 2000;
        const animateCounter = (start, end, setter) => {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                setter(Math.floor(progress * (end - start) + start));
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        };

        animateCounter(0, 1287, setSavings);
        animateCounter(0, 5786, setPhotos);
        animateCounter(0, 1440, setRockets);
        animateCounter(0, 7110, setGlobes);
    }, []);

    return (
        <div>
            <section className="numbers">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h2>{savings}+</h2>
                            <h6>Savings</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>{photos}+</h2>
                            <h6>Photos</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>{rockets}+</h2>
                            <h6>Rockets</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>{globes}+</h2>
                            <h6>Globes</h6>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Numbers;
