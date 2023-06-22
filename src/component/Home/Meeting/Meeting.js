import React from 'react';
import './Meeting.css';
import { BsCalendarCheckFill } from 'react-icons/bs';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from '../../../assets/images/Sir-Shajeel.webp';

const Meeting = () => {
  return (
   <div className='hmeet'>
      <Container>
      <Row>
        <Col lg="6">
        <p className='meethead'> <span className='under'>30 Min</span>utes Meeting!</p>
        <p className='meet'>Schedule a meeting</p>
        <p className='meetp'>Do you want to talk to me? Hurry up! Book your time now! <br/> Do you have any questions for me? Do you want that I review your profile? Here <br/> is your chance to book time with you and have a detailed discussion. <br/> People are taking help from me for:</p>

       <div className='meetdot'>
       <p className='meetp'> 
        <span className='dot'>&#8226;</span> Career Advise <br/>
        <span className='dot'>&#8226;</span> Freelancing Advise <br/>
        <span className='dot'>&#8226;</span> Upwork Profile Review <br/>
        <span className='dot'>&#8226;</span> Upwork Cover Letter Review <br/>
        <span className='dot'>&#8226;</span> Choosing the right skill for yourself <br/>
        </p>
       </div>

        <p className='meetp'>If you want to learn from my experience then feel free to schedule a meeting now. </p>
        <button className='mt-4 custom-button'>
         <BsCalendarCheckFill className='meetlogo'/> Schedule
        </button>
        </Col>

        <Col lg="6">
          <img className='meetimg' src={img1} alt="" />
        </Col>
      </Row>
    </Container>
   </div>
  );
};

export default Meeting;