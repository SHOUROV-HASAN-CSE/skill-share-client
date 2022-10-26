import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseCard = ({course}) => {

  const {title, image_url,category_id} = course;

  return (
    <div className='mb-5'>
       <Card className="text-center">
      <Card.Body>
      <Card.Img variant="top" src={image_url} />
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Link to={`/category/${category_id}`}><Button variant="primary">Course Details</Button></Link>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    </div>
  );
};

export default CourseCard;