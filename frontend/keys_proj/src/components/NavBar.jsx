import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

function NavBar({user, isLoggedIn, logout}) {

  const housesLink = isLoggedIn ? '/houses' : '/'; //Check if user is loggedin and if so, connect to main page: houses. If not, link to signup/login.
  const profileLink = isLoggedIn ? '/profile' : '/'; //Check if user is loggedin and if so, connect to the user profile. If not, link to signup/login.

  const logLink = isLoggedIn ? '/' : 'login' + logout; //will likely need to be altered for variations like "signup" instead of "login"/"logout"
  const logWords = isLoggedIn ? 'Log Out' : 'Log In'; //^^
  const signedInStatus = isLoggedIn ? 'Signed in as:' : 'Not signed in.'; //^^
  const namedUser = isLoggedIn ? user : ''; //^^
  const action = isLoggedIn ? null : null
  
  const navbarStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    position: 'fixed',
    width: '100%',
    zIndex: '1000',
  };

  return (
    <Navbar expand="lg" className="navbar" style={navbarStyle}>
      <Container>
        <Link to={housesLink}>
        <Navbar.Brand>
          <img
            alt="picture"
            src="/src/assets/noun-key-679919.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {' '}
          Keys
        </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="d-flex justify-content-end align-items-center">
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className='me-3'>
              {signedInStatus} <Link to={profileLink}>{namedUser}</Link>
            </Navbar.Text>
          </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="me-3">
              <Link to={logLink} onClick={action}>{logWords}</Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
