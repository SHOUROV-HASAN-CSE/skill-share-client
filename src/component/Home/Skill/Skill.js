import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Skill.css';
import img1 from '../../../assets/images/skill.webp'
import { Link } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Skill = () => {
  return (
    <div className='hskill'>
    <Container>
    <Row>
      <Col lg="6">
        <img className='skillimg' src={img1} alt="" />
      </Col>

      <Col lg="6">
      <p className='skillhead'> <span className='under'>Our</span>Works</p>
      <p className='skill'>Skill Development <br /> & Training</p>
      <p className='skillp'>What do you think is better to receive after each lesson: a lovely <br /> looking badge or important skills you can immediately put into <br /> practice. There is really no magic to it</p>

     <div className='skilldot'>
     <p className='skillp'> 
      <span className='dot'><BsFillArrowRightCircleFill className='skilllogo'/></span> Online Teaching & learning <br/>
      <span className='dot'><BsFillArrowRightCircleFill className='skilllogo'/></span> Certificate of Completion <br/>
      <span className='dot'><BsFillArrowRightCircleFill className='skilllogo'/></span> You Can Learn Anything<br/>
      </p>
     </div>
      <Link to={'/course'}><button className='mt-4 cb1'> All Courses</button></Link>
      </Col>
    </Row>
  </Container>
 </div>
  );
};

export default Skill;