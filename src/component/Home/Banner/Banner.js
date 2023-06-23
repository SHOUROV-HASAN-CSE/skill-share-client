import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
import { GiBookmarklet } from 'react-icons/gi';
import { FaGraduationCap} from 'react-icons/fa';
import { PiCertificateFill} from 'react-icons/pi';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='banner-image'>
      <Container>
        <p>.</p>
        <h1 className='bannerhead'>Learn high demanding <span className='feshead2'>Skills from Experts</span> and start making money <br /> online!</h1>
        <p className='bannerp'>Earn money from anywhere by leveraging your newly learned skills. LWS Academy will teach you the necessary skills to become a freelancer by explaining how to find clients, negotiate rates, market yourself as a freelancer, etc. on the go!</p>

        <div>
        <Link to={'/course'}><button className='mt-4 cb1'> All Courses</button></Link>
        <button className='mt-4 cb2'> Instructors</button>
        </div>

        <div className='go'>
        <Row >
        <Col  lg="4">
        <div className='bannerhbtn'>
        <GiBookmarklet className='bannerlogo'/>
        <div>
          <h2 className='bannerh'>Courses</h2>
          <p>view Courses</p>
        </div>
        </div>
        </Col>


        <Col  lg="4">
        <div className='bannerhbtn'>
        <PiCertificateFill className='bannerlogo'/>
        <div>
          <h2 className='bannerh'>Courses</h2>
          <p>view All</p>
        </div>
        </div>
        </Col>


        <Col  lg="4">
        <div className='bannerhbtn'>
        <FaGraduationCap className='bannerlogo'/>
        <div>
          <h2 className='bannerh'>Courses</h2>
          <p>view All</p>
        </div>
        </div>
        </Col>
        </Row>
        </div>

      </Container>
    </div>
  );
};

export default Banner;