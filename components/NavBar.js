/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import Link from 'next/link';
import Image from 'next/image';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchBar from './SearchBar';
import { useAuth } from '../utils/context/authContext';

export default function NavBar() {
  const { user } = useAuth();

  return (
    <Navbar expand="lg" id="navbar">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Create" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/pin/new">Create Pin</NavDropdown.Item>
              <NavDropdown.Item href="/board/new">
                Create Board
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <SearchBar className="d-flex" />
          <Nav.Link href="/profile">
            <Image src={user.photoURL} alt="userURL" width="50px" height="50px" id="navbarprofile" />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
