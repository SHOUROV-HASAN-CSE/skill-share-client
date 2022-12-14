import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import Alert from 'react-bootstrap/Alert';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub} from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import {AuthContext} from '../../../contexts/AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

  const {providerLogin, signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';



  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSingIn = () =>{
    providerLogin(googleProvider)
    .then(result=>{
      navigate(from, {replace: true});
    })
    .catch(error =>console.error(error)) 
  }
  const handleGithubSingIn = () =>{
    providerLogin(githubProvider)
    .then(result=>{
      navigate(from, {replace: true});
    })
    .catch(error =>console.error(error)) 
  }


const handleSubmit = event =>{
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;
  signIn(email, password)
  .then(result => {
      form.reset();
      navigate(from, {replace: true});
  })
  .catch(error => {console.error(error)
    toast(error.message,{position:"top-center"});
  })
}




  return (
    <Alert className='shadow-lg' variant={'info'}>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <p>Not a member? <Link to='/register'>Create Account</Link></p>
      </Form.Group>
      <Button variant="info" type="submit">
        Login
      </Button>
    </Form>
    
      <div>
      <ButtonGroup vertical>
      <Button onClick={handleGoogleSingIn} variant="outline-primary" className='mb-2 mt-5 ps-5 pe-5'><FaGoogle></FaGoogle>  Login With Google</Button>
      <Button onClick={handleGithubSingIn} variant="outline-dark"><FaGithub></FaGithub>  Login With Github</Button>
      </ButtonGroup>
      </div>
      <ToastContainer/>
    </Alert>
  );
};

export default Login;