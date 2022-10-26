import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {

  const course = useLoaderData();
  console.log(course);
  const {title, image_url, category_id, details} = course;


  return (
    <div>
      <h1 className='fs-1 fw-semibold mb-5 text-info text-center'>Course Details</h1>
      <Card className="text-center">
      <Card.Header>
        <div>Course Details
        <Button>Download PDF</Button></div>
      </Card.Header>
      <Card.Body>
      <Card.Img variant="top" src={image_url} />
        <Card.Title className='fs-1 mt-3'>{title}</Card.Title>
        <Card.Text>
          <p className='text-start fw-semibold'><span className='fs-5 fw-semibold'>Course Details: </span>{details}</p>
        </Card.Text>
        <Link to={`/checkout/${category_id}`}><Button className='fs-5' variant="primary">Get Premium Access</Button></Link>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    </div>
  );
};

export default CourseDetails;