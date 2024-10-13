import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavbarBootstrap.css';
import { Link } from 'react-router-dom';
import LoadingIcons from 'react-loading-icons'

export const NavbarBootstrap = () => {
  return (
    <Navbar expand="lg" className="bg-transparent">
      <Container className='navBorder'>
        {/* <form action='../../post' method='post'> */}
        <Navbar.Brand><Link activeClassName='is-active' to='/'>Home</Link></Navbar.Brand>
        {/* </form> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <div class='dropdown'>
              <Link to='skillstech'><a>Skills</a></Link>
              {/* <div class="dropdown-content">
                <div>riudvceuker</div>
                <div>riudvceuker</div>
                <div>riudvceuker</div>
                <div>riudvceuker</div>

              </div> */}
            </div>
            <div class='dropdown'>
              <Link to='certifications'><a>Certificates</a></Link>
              {/* <div class="dropdown-content">
                <div>riudvceuker</div>
                <div>riudvceuker</div>
                <div>riudvceuker</div>
                <div>riudvceuker</div>

              </div> */}
            </div>
            <div class='dropdown'>
              <Link to='experience'><a>Experience</a></Link>
              {/* <div class="dropdown-content">
                <div>riudvceuker</div>
                <div>riudvceuker</div>
                <div>riudvceuker</div>
                <div>riudvceuker</div>
              </div> */}
            </div>
            <div class='dropdown'>
              <Link to='projects'><a>Projects</a></Link>
              {/* <div class="dropdown-content">
                <div>riudvceuker</div>
                <div>riudvceuker</div>
                <div>riudvceuker</div>
                <div>riudvceuker</div>
              </div> */}
            </div>
            <div class='dropdown'>
              <Link to='contact'><a>Contact</a></Link>
              {/* <div class="dropdown-content">
                <div>riudvceuker</div>
                <div>riudvceuker</div>
                <div>riudvceuker</div>
                <div>riudvceuker</div>
              </div> */}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
