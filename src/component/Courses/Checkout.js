import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {

  const course = useLoaderData();
  console.log(course);
  const {title, } = course;

  return (
    <div>
     <h1 className='fs-1 fw-semibold mb-5 text-info text-center'>Checkout</h1>


     <Alert>
      <h1>{title}</h1>
     </Alert>
    </div>
  );
};

export default Checkout;