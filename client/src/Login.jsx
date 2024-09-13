// // src/components/Login.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Form, Button, Container } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// const Login = ({ setToken }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post('http://localhost:5000/login', { username, password });
//       setToken(data.token);
//       alert('Login successful');
//       navigate('/dashboard'); // Navigate to the UserDashboard on successful login
//     } catch (error) {
//       console.error('Error logging in:', error);
//       alert('Error logging in');
//     }
//   };

//   return (
//     <Container>
//       <h2>Login</h2>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="formUsername">
//           <Form.Label>Username</Form.Label>
//           <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
//         </Form.Group>
//         <Form.Group controlId="formPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </Form.Group>
//         <Button variant="primary" type="submit">Login</Button>
//       </Form>
//     </Container>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Card, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [variant, setVariant] = useState('success');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('https://prop-api.vercel.app/login', { username, password });
      setToken(data.token);
      setMessage('Login successful');
      setVariant('success');
      setTimeout(() => navigate('/dashboard'), 2000); // Redirect after 2 seconds
    } catch (error) {
      console.error('Error logging in:', error);
      setMessage('Error logging in');
      setVariant('danger');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100">
        <Col md={6} lg={4}>
          <Card className="p-4 shadow-sm">
            <Card.Body>
              <h2 className="mb-4 text-center">Login</h2>
              {message && <Alert variant={variant} onClose={() => setMessage('')} dismissible>{message}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUsername" className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">Login</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
