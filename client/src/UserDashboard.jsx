
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Button, Form, Card, Row, Col } from 'react-bootstrap';

// const UserDashboard = ({ token }) => {
//   const [properties, setProperties] = useState([]);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [address, setAddress] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [images, setImages] = useState([]);
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const { data } = await axios.get('http://localhost:5000/user/properties', {
//           headers: { 'auth-token': token }
//         });
//         setProperties(data);
//       } catch (error) {
//         console.error('Error fetching properties:', error);
//       }
//     };

//     fetchProperties();
//   }, [token]);

//   const handlePropertySubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('description', description);
//     formData.append('address', address);
//     formData.append('phoneNumber', phoneNumber);
//     images.forEach((image) => formData.append('images', image));
//     videos.forEach((video) => formData.append('videos', video));

//     try {
//       await axios.post('http://localhost:5000/property', formData, {
//         headers: { 'auth-token': token, 'Content-Type': 'multipart/form-data' }
//       });
//       alert('Property added successfully');
//       // Refresh properties list
//       const { data } = await axios.get('http://localhost:5000/user/properties', {
//         headers: { 'auth-token': token }
//       });
//       setProperties(data);
//     } catch (error) {
//       console.error('Error adding property:', error);
//       alert('Error adding property');
//     }
//   };

//   const handleDelete = async (propertyId) => {
//     try {
//       await axios.delete(`http://localhost:5000/property/${propertyId}`, {
//         headers: { 'auth-token': token }
//       });
//       alert('Property deleted successfully');
//       // Refresh properties list
//       const { data } = await axios.get('http://localhost:5000/user/properties', {
//         headers: { 'auth-token': token }
//       });
//       setProperties(data);
//     } catch (error) {
//       console.error('Error deleting property:', error);
//       alert('Error deleting property');
//     }
//   };

//   return (
//     <Container>
//       <h2>User Dashboard</h2>
//       <Form onSubmit={handlePropertySubmit}>
//         <Form.Group controlId="formTitle">
//           <Form.Label>Title</Form.Label>
//           <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
//         </Form.Group>
//         <Form.Group controlId="formDescription">
//           <Form.Label>Description</Form.Label>
//           <Form.Control as="textarea" rows={3} placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} />
//         </Form.Group>
//         <Form.Group controlId="formAddress">
//           <Form.Label>Address</Form.Label>
//           <Form.Control type="text" placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)} />
//         </Form.Group>
//         <Form.Group controlId="formPhoneNumber">
//           <Form.Label>Phone Number</Form.Label>
//           <Form.Control type="text" placeholder="Enter phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
//         </Form.Group>
//         <Form.Group controlId="formImages">
//           <Form.Label>Images</Form.Label>
//           <Form.Control type="file" multiple onChange={(e) => setImages([...e.target.files])} />
//         </Form.Group>
//         <Form.Group controlId="formVideos">
//           <Form.Label>Videos</Form.Label>
//           <Form.Control type="file" multiple onChange={(e) => setVideos([...e.target.files])} />
//         </Form.Group>
//         <Button variant="primary" type="submit">Add Property</Button>
//       </Form>
//       <Row>
//         {properties.map((property) => (
//           <Col key={property._id} sm={4}>
//             <Card>
//               <Card.Body>
//                 <Card.Title>{property.title}</Card.Title>
//                 <Card.Text>{property.description}</Card.Text>
//                 <Card.Text>{property.address}</Card.Text>
//                 <Card.Text>{property.phoneNumber}</Card.Text>
//                 <Button variant="danger" onClick={() => handleDelete(property._id)}>Delete Property</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default UserDashboard;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Button, Form, Card, Row, Col, Alert } from 'react-bootstrap';

const UserDashboard = ({ token }) => {
  const [properties, setProperties] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [message, setMessage] = useState('');
  const [variant, setVariant] = useState('success');

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/user/properties', {
          headers: { 'auth-token': token }
        });
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, [token]);

  const handlePropertySubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('address', address);
    formData.append('phoneNumber', phoneNumber);
    images.forEach((image) => formData.append('images', image));
    videos.forEach((video) => formData.append('videos', video));

    try {
      await axios.post('http://localhost:5000/property', formData, {
        headers: { 'auth-token': token, 'Content-Type': 'multipart/form-data' }
      });
      setMessage('Property added successfully');
      setVariant('success');
      // Refresh properties list
      const { data } = await axios.get('http://localhost:5000/user/properties', {
        headers: { 'auth-token': token }
      });
      setProperties(data);
    } catch (error) {
      console.error('Error adding property:', error);
      setMessage('Error adding property');
      setVariant('danger');
    }
  };

  const handleDelete = async (propertyId) => {
    try {
      await axios.delete(`http://localhost:5000/property/${propertyId}`, {
        headers: { 'auth-token': token }
      });
      setMessage('Property deleted successfully');
      setVariant('success');
      // Refresh properties list
      const { data } = await axios.get('http://localhost:5000/user/properties', {
        headers: { 'auth-token': token }
      });
      setProperties(data);
    } catch (error) {
      console.error('Error deleting property:', error);
      setMessage('Error deleting property');
      setVariant('danger');
    }
  };

  return (
    <Container className="my-4">
      {message && <Alert variant={variant} onClose={() => setMessage('')} dismissible>{message}</Alert>}
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <h3 className="mb-4">Add New Property</h3>
          <Form onSubmit={handlePropertySubmit}>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                placeholder="Enter description" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
              />
            </Form.Group>
            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter address" 
                value={address} 
                onChange={(e) => setAddress(e.target.value)} 
              />
            </Form.Group>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter phone number" 
                value={phoneNumber} 
                onChange={(e) => setPhoneNumber(e.target.value)} 
              />
            </Form.Group>
            <Form.Group controlId="formImages">
              <Form.Label>Images</Form.Label>
              <Form.Control 
                type="file" 
                multiple 
                onChange={(e) => setImages([...e.target.files])} 
              />
            </Form.Group>
            <Form.Group controlId="formVideos">
              <Form.Label>Videos</Form.Label>
              <Form.Control 
                type="file" 
                multiple 
                onChange={(e) => setVideos([...e.target.files])} 
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">Add Property</Button>
          </Form>
        </Card.Body>
      </Card>
      <Row>
        {properties.map((property) => (
          <Col key={property._id} sm={12} md={6} lg={4} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>{property.title}</Card.Title>
                <Card.Text>{property.description}</Card.Text>
                <Card.Text><strong>Address:</strong> {property.address}</Card.Text>
                <Card.Text><strong>Phone Number:</strong> {property.phoneNumber}</Card.Text>
                <Button variant="danger" onClick={() => handleDelete(property._id)}>Delete Property</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UserDashboard;
