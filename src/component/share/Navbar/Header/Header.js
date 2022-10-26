import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
      <Navbar.Brand>
      <Image className='me-2' style={{height: '35px'}} roundedCircle src='https://i.pinimg.com/736x/40/3d/4e/403d4e4b1392ebf2f91cca2e4ddde7f5.jpg'></Image>
        Skill Share
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Link to={'/'}><Button variant='info' className='text-white'>Home</Button></Link> 
          <Link to={'/course'}><Button variant='info' className='text-white'>Course</Button></Link> 
          <Link to={'/blog'}><Button variant='info' className='text-white'>Blog</Button></Link> 
          <Link to={'/faq'}><Button variant='info' className='text-white'>Faq</Button></Link> 
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              {
                user?.uid ?
                <>
                 <span onClick={handleLogOut}><CiLogout className='me-2 fs-3 text-white'></CiLogout></span>
                </>
                :
                <>
                <Link to={'/Login'}><Button variant='info' className='text-white'>Login</Button></Link> 
                </>
              }
              </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            {
              user?.uid ?
               <>
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