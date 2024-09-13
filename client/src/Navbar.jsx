// import React from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';

// const CustomNavbar = ({ token, adminToken }) => {
//   return (
//     <Navbar bg="primary" variant="dark" expand="lg">
//       <Container>
//         <Navbar.Brand href="/" className="fw-bold">Property Management</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link href="/" className="text-light">Home</Nav.Link>
//             {!token && <Nav.Link href="/login" className="text-light">Login</Nav.Link>}
//             {!token && <Nav.Link href="/register" className="text-light">Register</Nav.Link>}
//             {token && <Nav.Link href="/dashboard" className="text-light">User Dashboard</Nav.Link>}
//             {adminToken && <Nav.Link href="/admin-dashboard" className="text-light">Admin Dashboard</Nav.Link>}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default CustomNavbar;


import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const CustomNavbar = ({ token, adminToken }) => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="fw-bold"><span className="text-white">Bayelsa</span> <span className="text-warning">Connect</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="text-light">Home</Nav.Link>
            {!token && <Nav.Link href="/login" className="text-light">Login</Nav.Link>}
            {!token && <Nav.Link href="/register" className="text-light">Register</Nav.Link>}
            {token && <Nav.Link href="/dashboard" className="text-light">User Dashboard</Nav.Link>}
            {adminToken && <Nav.Link href="/admin-dashboard" className="text-light">Admin Dashboard</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
