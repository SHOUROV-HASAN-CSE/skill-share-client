import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
       <Card className="text-center">
      <Card.Body>
      <Card.Img variant="top" src='https://codetoinvent.com/wp-content/uploads/2020/12/programming-courses-back.jpg' />
        <Link to={'/course'}><Button variant="info" className='mt-5 fs-4 text-white'>All Course</Button></Link>
      </Card.Body>
    </Card>
    </div>
  );
};

export default Home;