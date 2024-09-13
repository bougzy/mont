// import React from 'react';
// import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';

// const HeroSection = () => {
//   return (
//     <div>
//       {/* Hero Banner */}
//       <div className="hero-banner text-center text-light">
//         <Container>
//           <h1 className="display-4">Welcome to Bayelsa Connect</h1>
//           <p className="lead">
//             Discover your perfect home with ease. Browse our listings and connect with landlords today.
//           </p>
//           <Button variant="primary" size="lg">Find Your Home</Button>
//         </Container>
//       </div>

//       {/* Property Categories Carousel */}
//       <Carousel className="my-4">
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="https://via.placeholder.com/800x400"
//             alt="First slide"
//           />
//           <Carousel.Caption>
//             <h3>Modern Apartments</h3>
//             <p>Explore contemporary living spaces in Bayelsa.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="https://via.placeholder.com/800x400"
//             alt="Second slide"
//           />
//           <Carousel.Caption>
//             <h3>Luxury Villas</h3>
//             <p>Find luxurious villas with top-notch amenities.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="https://via.placeholder.com/800x400"
//             alt="Third slide"
//           />
//           <Carousel.Caption>
//             <h3>Affordable Housing</h3>
//             <p>Discover budget-friendly housing options.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>

//       {/* Featured Properties */}
//       <Container>
//         <h2 className="my-4 text-center">Featured Properties</h2>
//         <Row>
//           <Col md={4}>
//             <Card className="mb-4">
//               <Card.Img variant="top" src="https://via.placeholder.com/350x200" />
//               <Card.Body>
//                 <Card.Title>Property 1</Card.Title>
//                 <Card.Text>
//                   A beautiful property located in the heart of the city.
//                 </Card.Text>
//                 <Button variant="primary">View Details</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={4}>
//             <Card className="mb-4">
//               <Card.Img variant="top" src="https://via.placeholder.com/350x200" />
//               <Card.Body>
//                 <Card.Title>Property 2</Card.Title>
//                 <Card.Text>
//                   Spacious and modern apartment with great amenities.
//                 </Card.Text>
//                 <Button variant="primary">View Details</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={4}>
//             <Card className="mb-4">
//               <Card.Img variant="top" src="https://via.placeholder.com/350x200" />
//               <Card.Body>
//                 <Card.Title>Property 3</Card.Title>
//                 <Card.Text>
//                   Cozy home with a large backyard and great location.
//                 </Card.Text>
//                 <Button variant="primary">View Details</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default HeroSection;



import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
// Make sure to create this CSS file

const HeroSection = () => {
  return (
    <div>
      {/* Hero Banner */}
      <div className="hero-banner text-center text-light">
        <Container>
          <h1 className="display-3 text-white">Welcome to Bayelsa Connect</h1>
          <p className="lead text-warning fw-bolder">
            Discover your perfect home with ease. Browse our listings and connect with landlords today.
          </p>
          <Button variant="primary" size="lg" className="mt-3">Find Your Home</Button>
        </Container>
      </div>

      {/* Property Categories Carousel */}
      <Carousel className="my-4">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="carousel-caption-title">Modern Apartments</h3>
            <p>Explore contemporary living spaces in Bayelsa.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 className="carousel-caption-title">Luxury Villas</h3>
            <p>Find luxurious villas with top-notch amenities.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 className="carousel-caption-title">Affordable Housing</h3>
            <p>Discover budget-friendly housing options.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Featured Properties */}
      <Container>
        <h2 className="my-4 text-center">Featured Properties</h2>
        <Row>
          <Col md={4}>
            <Card className="mb-4 shadow-sm">
              <Card.Img variant="top" src=" https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=600" />
              <Card.Body>
                <Card.Title>Property 1</Card.Title>
                <Card.Text>
                  A beautiful property located in the heart of the city.
                </Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4 shadow-sm">
              <Card.Img variant="top" src="https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=600" />
              <Card.Body>
                <Card.Title>Property 2</Card.Title>
                <Card.Text>
                  Spacious and modern apartment with great amenities.
                </Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4 shadow-sm">
              <Card.Img variant="top" src="https://images.pexels.com/photos/1776574/pexels-photo-1776574.jpeg?auto=compress&cs=tinysrgb&w=600" />
              <Card.Body>
                <Card.Title>Property 3</Card.Title>
                <Card.Text>
                  Cozy home with a large backyard and great location.
                </Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;

