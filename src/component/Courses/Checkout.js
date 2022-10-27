import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Checkout = () => {

  const course = useLoaderData();
  console.log(course);
  const {title, } = course;

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    toast('Congratulations!!!  Course Enroll Successfully...',{position:"top-center"})
    form.reset();
  }


  return (
    <div>
     <h1 className='fs-1 fw-semibold mb-3 text-info text-center'>Checkout</h1>

     <Alert variant='warning'>
      <h2 className='text-center'>Please Fillup the Form</h2>
     </Alert>
  
     <Alert className='shadow-lg' variant={'success'}>
      <Form onSubmit={handleSubmit}>
      <h1><small>Selected Course:</small> <span className='fw-bold'>{title}</span></h1>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Your Name" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control name="Address" type="text" placeholder="Address"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Your Mobile Number</Form.Label>
        <Form.Control name="number" type="number" placeholder="Mobile Number" required/>
      </Form.Group>
     <div className='text-center'>
     <Button variant="success" type="submit">Enroll</Button>
     </div>
    </Form>
    <ToastContainer/>
    </Alert>

    </div>
  );
};

export default Checkout;