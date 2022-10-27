import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseCard = ({course}) => {

  const {title, image_url,category_id} = course;

  return (
    <div className='mb-5 shadow-lg'>
       <Card className="text-center">
      <Card.Body>
      <Card.Img variant="top" src={image_url} />
        <Card.Title className='fs-1 mt-4 mb-4'>{title}</Card.Title>
        <Link to={`/category/${category_id}`}><Button variant="primary">Course Details</Button></Link>
      </Card.Body>
    </Card>
    </div>
  );
};

export default CourseCard;