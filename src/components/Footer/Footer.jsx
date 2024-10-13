import { MDBFooter, MDBContainer, MDBBtn } from "mdb-react-ui-kit";
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <MDBFooter className="text-center text-white">
          <MDBContainer className="p-4 pb-0">
            <ul className="list-unstyled">
              <li><a href="#register" className="footer-text-white">Register</a></li>
              <li><a href="#forum" className="footer-text-white">Forum</a></li>
              <li><a href="#affiliate" className="footer-text-white">Affiliate</a></li>
              <li><a href="#faq" className="footer-text-white">FAQ</a></li>
            </ul>

            <section className="mt-4">
              <MDBBtn floating className="m-1 social-icon" href="#!" role="button">
                <FaFacebook />
              </MDBBtn>

              <MDBBtn floating className="m-1 social-icon" href="#!" role="button">
                <FaTwitter />
              </MDBBtn>

              <MDBBtn floating className="m-1 social-icon" href="#!" role="button">
                <FaGoogle />
              </MDBBtn>

              <MDBBtn floating className="m-1 social-icon" href="#!" role="button">
                <FaInstagram />
              </MDBBtn>

              <MDBBtn floating className="m-1 social-icon" href="#!" role="button">
                <FaLinkedinIn />
              </MDBBtn>

              <MDBBtn floating className="m-1 social-icon" href="#!" role="button">
                <FaGithub />
              </MDBBtn>
            </section>
          </MDBContainer>

          <div className="rights-text-center p-3" >
            © 2024. Foodera: All rights reserved.
          </div>
        </MDBFooter>
      </footer>
    </>
  );
};

export default Footer;
