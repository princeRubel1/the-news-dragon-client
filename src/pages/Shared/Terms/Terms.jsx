import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container className='mt-5'>
            <h2>Terms and condition</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur distinctio cupiditate rerum, at quibusdam sed nisi recusandae ducimus esse porro!</p>
            <p>Go back to  <Link to='/register'>Register</Link></p>
        </Container>
    );
};

export default Terms;