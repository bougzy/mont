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
                Bayelsa Connect was founded with the goal of simplifying property rentals in Bayelsa. Over the years, we have grown to become the leading platform for landlords and tenants to connect seamlessly.
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
                Our mission is to help people find their dream home with ease. We aim to make the property rental process transparent, simple, and secure, bringing landlords and tenants together with the click of a button.
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
