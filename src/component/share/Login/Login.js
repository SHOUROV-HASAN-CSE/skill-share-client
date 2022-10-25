import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub} from "react-icons/fa";
import {AuthContext} from '../../../contexts/AuthProvider/AuthProvider';


const Login = () => {

  const {providerLogin} = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSingIn = () =>{
    providerLogin(googleProvider)
    .then(result=>{
      const user = result.user;
      console.log(user);
    })
    .catch(error =>console.error(error)) 
  }


  return (
    <div>
      
      <div>
      <ButtonGroup vertical>
      <Button onClick={handleGoogleSingIn} variant="outline-primary" className='mb-2 ps-5 pe-5'><FaGoogle></FaGoogle>  Login With Google</Button>
      <Button variant="outline-dark"><FaGithub></FaGithub>  Login With Github</Button>
      </ButtonGroup>
      </div>
    </div>
  );
};

export default Login;