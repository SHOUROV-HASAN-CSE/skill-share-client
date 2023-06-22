import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import {FaUser} from "react-icons/fa";
import { CiLogout} from "react-icons/ci";
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './Header.css'



const Header = () => {

const {user, logOut} = useContext(AuthContext);



const handleLogOut = () =>{
  logOut()
  .then(() =>{})
  .catch(error => console.error(error))
}

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
     <span>{user?.displayName}</span>
  </Tooltip>
);



  return (
    <Navbar collapseOnSelect className='mb-4 mainnavbar' expand="lg"  >
      <Container>
      <Navbar.Brand>
      <Image className='me-2' style={{height: '38px'}} roundedCircle src='https://i.pinimg.com/736x/40/3d/4e/403d4e4b1392ebf2f91cca2e4ddde7f5.jpg'></Image>
       <span className='text-white fs-3'> Skill Share</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Link to={'/'} className="btn text-white">Home</Link> 
          <Link to={'/course'} className="btn text-white">Courses</Link> 
          <Link to={'/blog'} className="btn text-white">Blog</Link> 
          <Link to={'/faq'} className="btn text-white"> FAQ</Link> 
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              {
                user?.uid ?
                <>
                 <span onClick={handleLogOut}><CiLogout className='me-1 fs-3 text-white'></CiLogout></span>
                </>
                :
                <>
                <Link to={'/Login'} className='btn text-white'>Login</Link> 
                </>
              }
              </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            {
              user?.uid ?
               <>
               <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }}overlay={renderTooltip} >
                <Image style={{height: '30px'}} roundedCircle src={user?.photoURL}></Image>
                </OverlayTrigger>
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