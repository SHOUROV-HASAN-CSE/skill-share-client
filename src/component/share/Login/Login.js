import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub} from "react-icons/fa";

const Login = () => {
  return (
    <div>
      
      <div>
      <ButtonGroup vertical>
      <Button variant="outline-primary" className='mb-2 ps-5 pe-5'><FaGoogle></FaGoogle>  Login With Google</Button>
      <Button variant="outline-dark"><FaGithub></FaGithub>  Login With Github</Button>
      </ButtonGroup>
      </div>
    </div>
  );
};

export default Login;