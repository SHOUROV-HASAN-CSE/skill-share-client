import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img2 from '../../../assets/images/app.webp';
import './Footer.css';
import { FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='py-5'>
     <Container className='footerbr'>
      <Row>
        <Col lg="4">
        <div className='md:ml-28 mx-auto'>
      <img className='w-56 -mt-16' src="" alt="" />
      <div>
      <h3 className='fmainlogo'>Skill Share</h3>
      <p><FaWhatsapp className='footerlogo'/>+92 305 9552222</p>
      <p className='footertext'><FiMail className='footerlogo'/>contract@skillshare.com</p>
      </div>
    </div>  
        </Col>


        <Col lg="3">
        <div className='row'>
      <span className="footerh">Quick Links</span>   
      <Link to='' className="footers">About </Link>
      <Link to='' className="footers">Shop</Link>
      <Link to='' className="footers">Services </Link>
     </div>
      </Col>

      <Col lg="3">
      <div className='row'>
      <span className="footerh">Support</span>   
      <Link to='' className="footers">Privacy Policy</Link>
      <Link to='' className="footers">Terms of service</Link>
      <Link to='' className="footers">FAQs</Link>
      <Link to='' className="footers">Instructors</Link>
      <Link to='' className="footers">Blog </Link>
    </div> 
      </Col>

    <Col lg="2">
      <div className='mx-auto md:mt-24'>
      <span className="footerh">Mobile App</span> <br />
      <p className='apptext'>Click and Get started in seconds</p>

      <img className='footerimg' src={img2} alt="" />

  </div> 
      </Col>
      </Row>
    </Container>

    <p className='copytext'>Copyright © 2022 - All right reserved || Developed By SHOUROV HASAN</p>


    </div>
    
  );
};

export default Footer;




