import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext);
    const [accepted,seAccepted] = useState(false);

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name,email,password,photo);

        createUser(email,password)
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    const handleAccpted = event =>{
       seAccepted(event.target.checked)
    }

    return (
        <Container className='mx-auto w-25 shadow p-5 mb-5 bg-white rounded mt-5'>
          <h2>Register your account</h2>
            <Form className='mt-3' onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter URL" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                     onClick={handleAccpted}
                     type="checkbox" 
                     name='accept' 
                     label={<>Accept <Link to='/terms'>Accept Terms & Conditions</Link></>} 
                     />
                </Form.Group>
                <Button variant="primary" disabled ={!accepted} type="submit" className='block'>
                    Register
                </Button>
                <br />
                <Form.Text className="text-secondary">
                Already Have an account <Link to='/login'>Login</Link>
                </Form.Text>

                <Form.Text className="text-danger">
                
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;