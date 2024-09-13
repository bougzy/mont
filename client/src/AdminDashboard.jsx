// // src/components/AdminDashboard.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Button, Form, Table } from 'react-bootstrap';

// const AdminDashboard = ({ adminToken }) => {
//   const [users, setUsers] = useState([]);
//   const [properties, setProperties] = useState([]);

//   useEffect(() => {
//     const fetchUsersAndProperties = async () => {
//       try {
//         const [usersData, propertiesData] = await Promise.all([
//           axios.get('http://localhost:5000/admin/users', {
//             headers: { 'auth-token': adminToken }
//           }),
//           axios.get('http://localhost:5000/properties')
//         ]);
//         setUsers(usersData.data);
//         setProperties(propertiesData.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchUsersAndProperties();
//   }, [adminToken]);

//   const handleBlockUser = async (userId) => {
//     try {
//       await axios.post('http://localhost:5000/admin/block-user', { userId }, {
//         headers: { 'auth-token': adminToken }
//       });
//       alert('User blocked');
//       // Refresh user list
//       const { data } = await axios.get('http://localhost:5000/admin/users', {
//         headers: { 'auth-token': adminToken }
//       });
//       setUsers(data);
//     } catch (error) {
//       console.error('Error blocking user:', error);
//       alert('Error blocking user');
//     }
//   };

//   const handleUnblockUser = async (userId) => {
//     try {
//       await axios.post('http://localhost:5000/admin/unblock-user', { userId }, {
//         headers: { 'auth-token': adminToken }
//       });
//       alert('User unblocked');
//       // Refresh user list
//       const { data } = await axios.get('http://localhost:5000/admin/users', {
//         headers: { 'auth-token': adminToken }
//       });
//       setUsers(data);
//     } catch (error) {
//       console.error('Error unblocking user:', error);
//       alert('Error unblocking user');
//     }
//   };

//   const handleDeleteProperty = async (propertyId) => {
//     try {
//       await axios.post('http://localhost:5000/admin/delete-property', { propertyId }, {
//         headers: { 'auth-token': adminToken }
//       });
//       alert('Property deleted');
//       // Refresh property list
//       const { data } = await axios.get('http://localhost:5000/properties');
//       setProperties(data);
//     } catch (error) {
//       console.error('Error deleting property:', error);
//       alert('Error deleting property');
//     }
//   };

//   return (
//     <Container>
//       <h2>Admin Dashboard</h2>
//       <h3>Users</h3>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Username</th>
//             <th>Email</th>
//             <th>Blocked</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user._id}>
//               <td>{user.username}</td>
//               <td>{user.email}</td>
//               <td>{user.isBlocked ? 'Yes' : 'No'}</td>
//               <td>
//                 {user.isBlocked ? (
//                   <Button onClick={() => handleUnblockUser(user._id)}>Unblock</Button>
//                 ) : (
//                   <Button onClick={() => handleBlockUser(user._id)}>Block</Button>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//       <h3>Properties</h3>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Description</th>
//             <th>Address</th>
//             <th>Phone Number</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {properties.map((property) => (
//             <tr key={property._id}>
//               <td>{property.title}</td>
//               <td>{property.description}</td>
//               <td>{property.address}</td>
//               <td>{property.phoneNumber}</td>
//               <td>
//                 <Button onClick={() => handleDeleteProperty(property._id)}>Delete</Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </Container>
//   );
// };

// export default AdminDashboard;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Button, Table, Card, Alert } from 'react-bootstrap';

const AdminDashboard = ({ adminToken }) => {
  const [users, setUsers] = useState([]);
  const [properties, setProperties] = useState([]);
  const [message, setMessage] = useState('');
  const [variant, setVariant] = useState('success');

  useEffect(() => {
    const fetchUsersAndProperties = async () => {
      try {
        const [usersData, propertiesData] = await Promise.all([
          axios.get('https://prop-api.vercel.app/admin/users', {
            headers: { 'auth-token': adminToken }
          }),
          axios.get('https://prop-api.vercel.app/properties')
        ]);
        setUsers(usersData.data);
        setProperties(propertiesData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUsersAndProperties();
  }, [adminToken]);

  const handleBlockUser = async (userId) => {
    try {
      await axios.post('https://prop-api.vercel.app/admin/block-user', { userId }, {
        headers: { 'auth-token': adminToken }
      });
      setMessage('User blocked successfully');
      setVariant('success');
      // Refresh user list
      const { data } = await axios.get('https://prop-api.vercel.app/admin/users', {
        headers: { 'auth-token': adminToken }
      });
      setUsers(data);
    } catch (error) {
      console.error('Error blocking user:', error);
      setMessage('Error blocking user');
      setVariant('danger');
    }
  };

  const handleUnblockUser = async (userId) => {
    try {
      await axios.post('https://prop-api.vercel.app/admin/unblock-user', { userId }, {
        headers: { 'auth-token': adminToken }
      });
      setMessage('User unblocked successfully');
      setVariant('success');
      // Refresh user list
      const { data } = await axios.get('https://prop-api.vercel.app/admin/users', {
        headers: { 'auth-token': adminToken }
      });
      setUsers(data);
    } catch (error) {
      console.error('Error unblocking user:', error);
      setMessage('Error unblocking user');
      setVariant('danger');
    }
  };

  const handleDeleteProperty = async (propertyId) => {
    try {
      await axios.post('https://prop-api.vercel.app/admin/delete-property', { propertyId }, {
        headers: { 'auth-token': adminToken }
      });
      setMessage('Property deleted successfully');
      setVariant('success');
      // Refresh property list
      const { data } = await axios.get('https://prop-api.vercel.app/properties');
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
          <h3 className="mb-4">Users</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Blocked</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.isBlocked ? 'Yes' : 'No'}</td>
                  <td>
                    {user.isBlocked ? (
                      <Button variant="success" onClick={() => handleUnblockUser(user._id)}>Unblock</Button>
                    ) : (
                      <Button variant="warning" onClick={() => handleBlockUser(user._id)}>Block</Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      <Card className="shadow-sm">
        <Card.Body>
          <h3 className="mb-4">Properties</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {properties.map((property) => (
                <tr key={property._id}>
                  <td>{property.title}</td>
                  <td>{property.description}</td>
                  <td>{property.address}</td>
                  <td>{property.phoneNumber}</td>
                  <td>
                    <Button variant="danger" onClick={() => handleDeleteProperty(property._id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AdminDashboard;
