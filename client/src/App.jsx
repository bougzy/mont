// src/App.js
import React, { useState } from 'react';
import {  Route, Routes } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import AdminLogin from './AdminLogin';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import Home from './Home';
import Navbar from './Navbar';
import  './App.css'
import Footer from './Footer';

function App() {
  const [token, setToken] = useState(null);
  const [adminToken, setAdminToken] = useState(null);

  return (
    <>
      {/* <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Property Management</Navbar.Brand>
        <Nav className="mr-auto d-flex">
          <Nav.Link href="/">Home</Nav.Link>
          {!token && <Nav.Link href="/login">Login</Nav.Link>}
          {!token && <Nav.Link href="/register">Register</Nav.Link>}
          {token && <Nav.Link href="/dashboard">User Dashboard</Nav.Link>}
          {adminToken && <Nav.Link href="/admin-dashboard">Admin Dashboard</Nav.Link>}
        </Nav> */}
      <Navbar token={token} adminToken={adminToken}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/admin-login" element={<AdminLogin setAdminToken={setAdminToken} />} />
        <Route path="/dashboard" element={token ? <UserDashboard token={token} /> : <Login setToken={setToken} />} />
        <Route path="/admin-dashboard" element={adminToken ? <AdminDashboard adminToken={adminToken} /> : <AdminLogin setAdminToken={setAdminToken} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
