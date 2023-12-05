import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState("Mark Otto")

  const housesLink = isLoggedIn ? '/houses' : '/'; //Check if user is loggedin and if so, connect to main page: houses. If not, link to signup/login.
  const profileLink = isLoggedIn ? '/profile' : '/'; //Check if user is loggedin and if so, connect to the user profile. If not, link to signup/login.

  const logLink = isLoggedIn ? '/' : 'login'; //will likely need to be altered for variations like "signup" instead of "login"/"logout"
  const logWords = isLoggedIn ? 'Log Out' : 'Log In'; //^^
  const signedInStatus = isLoggedIn ? 'Signed in as:' : 'Not signed in.'; //^^
  const namedUser = isLoggedIn ? currentUser : ''; //^^
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to={housesLink}>
        <Navbar.Brand>
          <img
            alt="picture"
            src="https://imgs.search.brave.com/dbbI_LAHQuZ75Zzuw8b9kgNPhu8t1jw_8TIL_7z5LcY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3JlYXRpdmVt/YXJrZXQuY29tLzAu/MS4wL3BzLzE1Mzk4/NjUvOTAvNjAvbTIv/ZnBudy93bTAva2V5/czJfY20tLmpwZz8x/NDcwNzYwMjg4JnM9/N2Q3NjdjYWE4Njg4/MzZlZTgwZTk0ZTRi/MGZjODVkOTA"
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
              <Link to={logLink}>{logWords}</Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
