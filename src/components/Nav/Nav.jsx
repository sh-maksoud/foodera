import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '/images/logo.png'; 
import './Nav.css';

function Navigation() {
    return (
        <Navbar expand="lg" className="bg-body">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#Intro">About Us</Nav.Link> {/* Link to Intro section */}
                        <Nav.Link href="#explore">Explore Foods</Nav.Link> {/* Link to explore section */}
                        <Nav.Link href="#testimonials">Reviews</Nav.Link> {/* Link to Testimonials section */}
                        <Nav.Link href="#faq">Faq</Nav.Link> {/* Link to FAQ section */}
                    </Nav>
                    <Nav>
                        <Nav.Link id="phone" href="#">1800 789 123</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
