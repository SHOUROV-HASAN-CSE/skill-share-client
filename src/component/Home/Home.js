import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Meeting from './Meeting/Meeting';
import Review from './Review/Review';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
  return (
    <div>
       <Container>
       <Card className="text-center">
      <Card.Body>
      <Card.Img variant="top" src='https://codetoinvent.com/wp-content/uploads/2020/12/programming-courses-back.jpg' />
        <Link to={'/course'}><Button variant="info" className='mt-5 fs-4 text-white'>All Course</Button></Link>
      </Card.Body>
    </Card>
       </Container>
       <Review/>
       <Meeting/>
    <Testimonial/>
    </div>
  );
};

export default Home;