



// import React, { useState } from 'react';
// import axios from 'axios';
// import { Form, Button, Container } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// const AdminLogin = ({ setAdminToken }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); // Create navigate function

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post('http://localhost:5000/admin/login', { username, password });
//       setAdminToken(data.token);
//       alert('Admin login successful');
//       navigate('/admin-dashboard'); // Navigate to admin dashboard
//     } catch (error) {
//       console.error('Error logging in:', error);
//       alert('Error logging in');
//     }
//   };

//   return (
//     <Container>
//       <h2>Admin Login</h2>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="formUsername">
//           <Form.Label>Username</Form.Label>
//           <Form.Control 
//             type="text" 
//             placeholder="Enter username" 
//             value={username} 
//             onChange={(e) => setUsername(e.target.value)} 
//           />
//         </Form.Group>
//         <Form.Group controlId="formPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control 
//             type="password" 
//             placeholder="Password" 
//             value={password} 
//             onChange={(e) => setPassword(e.target.value)} 
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit">Login</Button>
//       </Form>
//     </Container>
//   );
// };

// export default AdminLogin;




import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AdminLogin = ({ setAdminToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Create navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('https://prop-api.vercel.app/admin/login', { username, password });
      setAdminToken(data.token);
      alert('Admin login successful');
      navigate('/admin-dashboard'); // Navigate to admin dashboard
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
        <Card.Body>
          <h2 className="text-center mb-4">Admin Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername" className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">Login</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AdminLogin;
