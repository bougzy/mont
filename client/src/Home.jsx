



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Row, Col, Card, Carousel, Modal, Button } from 'react-bootstrap';
// import HeroSection from './Hero';


// const Homepage = () => {
//   const [properties, setProperties] = useState([]);
//   const [selectedProperty, setSelectedProperty] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const { data } = await axios.get('http://localhost:5000/properties');
//         setProperties(data);
//       } catch (error) {
//         console.error('Error fetching properties:', error);
//       }
//     };

//     fetchProperties();
//   }, []);

//   const handleShowModal = (property) => {
//     setSelectedProperty(property);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setSelectedProperty(null);
//   };

//   return (
//     <Container>
//         <HeroSection />
//       <h2>Available Properties</h2>
//       <Row>
//         {properties.map((property) => (
//           <Col key={property._id} sm={4}>
//             <Card>
//               <Card.Body>
//                 {/* Display images */}
//                 {property.images && property.images.length > 0 && (
//                   <div onClick={() => handleShowModal(property)}>
//                     <img
//                       src={`http://localhost:5000/${property.images[0]}`}
//                       alt={`Property image ${property.title}`}
//                       style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
//                     />
//                   </div>
//                 )}

//                 {/* Display videos */}
//                 {property.videos && property.videos.length > 0 && (
//                   <div onClick={() => handleShowModal(property)}>
//                     <video
//                       controls
//                       style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
//                     >
//                       <source src={`http://localhost:5000/${property.videos[0]}`} type="video/mp4" />
//                       Your browser does not support the video tag.
//                     </video>
//                   </div>
//                 )}

//                 <Card.Title>{property.title}</Card.Title>
//                 <Card.Text>{property.description}</Card.Text>

//                 {/* Show address and phone number only when 'View More' is clicked */}
//                 {property.isExpanded ? (
//                   <>
//                     <Card.Text>{property.address}</Card.Text>
//                     <Card.Text>{property.phoneNumber}</Card.Text>
//                   </>
//                 ) : null}

//                 <Button
//                   variant="primary"
//                   onClick={() => handleShowModal(property)}
//                 >
//                   View More
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//       {/* Modal for carousel */}
//       <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
//         <Modal.Header closeButton>
//           <Modal.Title>{selectedProperty?.title}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedProperty && (
//             <>
//               <h4>{selectedProperty.description}</h4> {/* Display description */}
//               {/* Carousel for images */}
//               {selectedProperty.images && selectedProperty.images.length > 0 && (
//                 <Carousel>
//                   {selectedProperty.images.map((image, index) => (
//                     <Carousel.Item key={index}>
//                       <img
//                         src={`http://localhost:5000/${image}`}
//                         alt={`Property image ${index + 1}`}
//                         style={{ width: '100%', height: 'auto' }}
//                       />
//                     </Carousel.Item>
//                   ))}
//                 </Carousel>
//               )}

//               {/* Carousel for videos */}
//               {selectedProperty.videos && selectedProperty.videos.length > 0 && (
//                 <Carousel>
//                   {selectedProperty.videos.map((video, index) => (
//                     <Carousel.Item key={index}>
//                       <video
//                         controls
//                         style={{ width: '100%', height: 'auto' }}
//                       >
//                         <source src={`http://localhost:5000/${video}`} type="video/mp4" />
//                         Your browser does not support the video tag.
//                       </video>
//                     </Carousel.Item>
//                   ))}
//                 </Carousel>
//               )}

//               {/* Display address and phone number in modal */}
//               {selectedProperty.address && (
//                 <div>
//                   <h5>Address:</h5>
//                   <p>{selectedProperty.address}</p>
//                 </div>
//               )}
//               {selectedProperty.phoneNumber && (
//                 <div>
//                   <h5>Phone Number:</h5>
//                   <p>{selectedProperty.phoneNumber}</p>
//                 </div>
//               )}
//             </>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </Container>
//   );
// };

// export default Homepage;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Carousel, Modal, Button, Form } from 'react-bootstrap';
import HeroSection from './Hero';
import AboutUs from './About';

const Homepage = () => {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  const localGovernments = [
    'Ekeremor', 
    'Kolokuma Opokuma', 
    'Yenagoa', 
    'Nembe', 
    'Ogbia', 
    'Sagbama', 
    'Brass', 
    'Southern Ijaw'
  ];

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const { data } = await axios.get('https://prop-api.vercel.app/properties');
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  const handleShowModal = (property) => {
    setSelectedProperty(property);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProperty(null);
  };

  // Filter properties based on the search query
  const filteredProperties = properties.filter((property) =>
    localGovernments.some((lga) =>
      lga.toLowerCase().includes(searchQuery.toLowerCase())
    ) &&
    property.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <HeroSection />
      <h2>Available Properties</h2>

      {/* Search Input */}
      <Form.Group controlId="search" className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search by LGA (Ekeremor, Yenagoa, etc.)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Form.Group>

      <Row>
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <Col key={property._id} sm={4}>
              <Card>
                <Card.Body>
                  {/* Display images */}
                  {property.images && property.images.length > 0 && (
                    <div onClick={() => handleShowModal(property)}>
                      <img
                        src={`https://prop-api.vercel.app/${property.images[0]}`}
                        alt={`Property image ${property.title}`}
                        style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
                      />
                    </div>
                  )}

                  {/* Display videos */}
                  {property.videos && property.videos.length > 0 && (
                    <div onClick={() => handleShowModal(property)}>
                      <video
                        controls
                        style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
                      >
                        <source src={`https://prop-api.vercel.app/${property.videos[0]}`} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}

                  <Card.Title>{property.title}</Card.Title>
                  <Card.Text>{property.description}</Card.Text>

                  <Button
                    variant="primary"
                    onClick={() => handleShowModal(property)}
                  >
                    View More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No properties found in this LGA.</p>
        )}
      </Row>

      {/* Modal for carousel */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProperty?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProperty && (
            <>
              <h4>{selectedProperty.description}</h4> {/* Display description */}
              {/* Carousel for images */}
              {selectedProperty.images && selectedProperty.images.length > 0 && (
                <Carousel>
                  {selectedProperty.images.map((image, index) => (
                    <Carousel.Item key={index}>
                      <img
                        src={`https://prop-api.vercel.app/${image}`}
                        alt={`Property image ${index + 1}`}
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              )}

              {/* Carousel for videos */}
              {selectedProperty.videos && selectedProperty.videos.length > 0 && (
                <Carousel>
                  {selectedProperty.videos.map((video, index) => (
                    <Carousel.Item key={index}>
                      <video
                        controls
                        style={{ width: '100%', height: 'auto' }}
                      >
                        <source src={`https://prop-api.vercel.app/${video}`} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </Carousel.Item>
                  ))}
                </Carousel>
              )}

              {/* Display address and phone number in modal */}
              {selectedProperty.address && (
                <div>
                  <h5>Address:</h5>
                  <p>{selectedProperty.address}</p>
                </div>
              )}
              {selectedProperty.phoneNumber && (
                <div>
                  <h5>Phone Number:</h5>
                  <p>{selectedProperty.phoneNumber}</p>
                </div>
              )}
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <AboutUs />
    </Container>
  );
};

export default Homepage;

