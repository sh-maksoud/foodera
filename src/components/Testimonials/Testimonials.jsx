import { Carousel, Container, Row, Col } from 'react-bootstrap';
import testimoniol_1 from '/images/Testimonials.jpg'; 
import testimoniol_2 from '/images/Testimonials2.jpg';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="sliderX" id='testimonials'>
      <Container>
        <Row>
          <Col lg={12} md={12}>
            <h2>Testimonial</h2>
          </Col>
        </Row>

        <Row>
          <Col lg={12} md={12}>
            <Carousel interval={3000}> 
              {/* First Carousel Item */}
              <Carousel.Item>
                <img src={testimoniol_1} alt="Testimonial 1" className="d-block " />
                <br />
                <Carousel.Caption>
                  <p>&quot;Behind the word mountains, far from the countries Vokalia.&quot;</p>
                  <span>Simab Dave - Web Designer</span>
                </Carousel.Caption>
              </Carousel.Item>

              {/* Second Carousel Item */}
              <Carousel.Item>
                <img src={testimoniol_2} alt="Testimonial 2" className="d-block " />
                <br />
                <Carousel.Caption>
                  <p>&quot;Far far away, far from the countries Vokalia and Consonantia.&quot;</p>
                  <span>Johnthan Doe - UX Designer</span>
                </Carousel.Caption>
              </Carousel.Item>

              {/* Third Carousel Item */}
              <Carousel.Item>
                <img src={testimoniol_1} alt="Testimonial 3" className="d-block " />
                <br />
                <Carousel.Caption>
                  <p>&quot;Far far away, behind the word mountains.&quot;</p>
                  <span>Maccy Doe - Front End</span>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
