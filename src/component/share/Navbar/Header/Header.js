import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import {FaUser} from "react-icons/fa";
import { CiLogout} from "react-icons/ci";
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';



const Header = () => {

const {user, logOut} = useContext(AuthContext);

const handleLogOut = () =>{
  logOut()
  .then(() =>{})
  .catch(error => console.error(error))
}

  return (
    <Navbar collapseOnSelect className='mb-4' expand="lg" bg="info" variant="dark">
      <Container>
      <Navbar.Brand><Link to={'/'}>Skill Share</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Link to={'/course'}><Button variant='info' className='text-white'>Course</Button></Link> 
          <Link to={'/blog'}><Button variant='info' className='text-white'>Blog</Button></Link> 
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              {
                user?.uid ?
                <>
                <span> {user?.displayName}</span>
               
                </>
                :
                <>
                <Link to='/login'><Button variant="light">Login</Button></Link>
                </>
              }
             
              </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            {
              user?.uid ?
               <>
                <span onClick={handleLogOut}><CiLogout className='me-2 fs-3 text-white'></CiLogout></span>
                <Image style={{height: '30px'}} roundedCircle src={user?.photoURL}></Image>
               </>
                : <FaUser></FaUser>
            }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;