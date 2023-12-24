import React, { useContext } from 'react';
import { Button, Container,Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    
    const {signIn} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);


        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate('/category/0')
        })
        .catch(error =>{
            console.log(error);
        })
    }



    return (
    <Container className='mx-auto w-25 shadow p-5 mb-5 bg-white rounded mt-5'>
        <h2>Login your account</h2>
      <Form className='mt-3' onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' placeholder="Enter email" required/>
            
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' placeholder="Password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" className='block'>
            Submit
        </Button>
        <br />
        <Form.Text className="text-secondary">
           Don't Have an account <Link to='/register'>Register</Link>
          </Form.Text>

        <Form.Text className="text-danger">
          
        </Form.Text>
      </Form>
    </Container>
    );
};

export default Login;