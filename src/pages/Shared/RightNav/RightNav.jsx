import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import {  FaGithub, FaGoogle,FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png';


const RightNav = () => {
    return (
        <div>
            <h4 className='mb-3 mt-4 ps-4'>Login With</h4>
            <Button className='px-3 mb-2 w-100' variant="outline-primary">
            <FaGoogle></FaGoogle>     Login with Google
            </Button>
            <Button className='px-3 mb-4 w-100' variant="outline-secondary">
             <FaGithub className='ml-2'></FaGithub>Login with Github
            </Button>
            <div>
                <h4 className='mb-3'>Find us on</h4>
                <ListGroup className=''>
                    <ListGroup.Item className='p-3'><FaFacebook className='fs-2 me-2'></FaFacebook> FaceBook</ListGroup.Item>
                    <ListGroup.Item className='p-3'><FaTwitter className='fs-2 me-2'></FaTwitter>Twitter</ListGroup.Item>
                    <ListGroup.Item className='p-3'><FaInstagram className='fs-2 me-2'></FaInstagram>Instagram</ListGroup.Item>
                    
                </ListGroup>

            </div>
            <QZone></QZone>
            <div> 
                
                <img src={bg} alt="" />
                <h3>Create an Amazing Newspaper</h3>
            </div>
        </div>
    );
};

export default RightNav;