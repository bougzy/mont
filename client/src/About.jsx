import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container className="py-5">
      <Row className="text-center mb-4">
        <Col>
          <h1>About Us</h1>
          <p className="lead">Learn more about Bayelsa Connect and our mission to connect you with the perfect property.</p>
        </Col>
      </Row>

      {/* Company History */}
      <Row className="mb-5">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Our History</Card.Title>
              <Card.Text>
              Wisdom Gbasei, a computer science and informatics final year student, developed this system, Bayelsa Real Estate Connect, as a final year project. The project's goal is to give the state of Bayelsa better real estate services. This real estate website, in contrast to others, focuses on providing people with a means of renting and selling properties on their own
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Mission */}
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
              Our mission is to make it easier for people to own their ideal home in Bayelsa State and to avoid being taken advantage of by real estate brokers and businesses. By facilitating communication between buyers and sellers, Bayelsa Real Estate Connect will speed up, simplify, and reduce the time required for the acquisition and rental of real estate
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Meet the Team */}
     

      {/* Call to Action */}
      <Row className="text-center">
        <Col>
          <h2>Join Us Today</h2>
          <p className="lead">Become part of Bayelsa Connect and start your journey to find the perfect property.</p>
          <Button variant="primary" size="lg">Get Started</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
