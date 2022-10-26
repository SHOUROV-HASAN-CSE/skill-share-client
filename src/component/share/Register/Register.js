import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {

  const {createUser, updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
    .then(result => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate('/login');
        handleUpdateUserProfile(name, photoURL);
       
    })
    .catch(error => {console.error(error)
      toast(error.message,{position:"top-center"});
    });
  }

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
        displayName: name,
        photoURL: photoURL
    }

    updateUserProfile(profile)
        .then(() => { })
        .catch(error => console.error(error));
}


  return (
    <div>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Your Name" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhotoUrl">
        <Form.Label>photo URL</Form.Label>
        <Form.Control name="photoURL" type="text" placeholder="photo URL"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <p>Already have an <Link to='/login'> Account</Link></p>
      </Form.Group>
      <Button variant="info" type="submit">
        Register
      </Button>
    </Form>
    <ToastContainer/>
    </div>
  );
};

export default Register;