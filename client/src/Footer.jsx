import React from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
 // Make sure to create this CSS file

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>About Us</h5>
            <p>
              Bayelsa Connect is your go-to platform for finding the perfect home. We connect tenants with property owners across Bayelsa with ease.
            </p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="#home" className="text-light">Home</Nav.Link>
              <Nav.Link href="#properties" className="text-light">Properties</Nav.Link>
              <Nav.Link href="#about" className="text-light">About Us</Nav.Link>
              <Nav.Link href="#contact" className="text-light">Contact</Nav.Link>
            </Nav>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Contact Us</h5>
            <p>
              Email: <a href="mailto:info@bayelsaconnect.com" className="text-light">info@bayelsaconnect.com</a><br />
              Phone: <a href="tel:+123456789" className="text-light">+123-456-789</a>
            </p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2"><FaLinkedinIn /></a>
            </div>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <p className="mb-0">© {new Date().getFullYear()} Bayelsa Connect. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
