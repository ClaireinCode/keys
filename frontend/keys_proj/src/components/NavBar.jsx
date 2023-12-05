import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
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
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="profile">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="logout">Log Out</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
