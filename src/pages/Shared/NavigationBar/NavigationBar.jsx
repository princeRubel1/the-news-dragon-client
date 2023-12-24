import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../../../providers/AuthProvider';
const NavigationBar = () => {
    const {user,logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
      logOut()
      .then()
      .catch(error =>{
        console.log(error);
      })
    }

    return (
        <Container className='mt-4'>
             <Navbar collapseOnSelect expand="lg" bg='light' variant='light'>
                    <Container>
                   
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link className='text-decoration-none me-2' to='/category/0'>Home</Link>
                        <Link className='text-decoration-none me-2' to ='/career'>Career</Link>
                        <Link className='text-decoration-none me-2'  to='/about'>About</Link>
                    </Nav>
                    <Nav>
                        {
                          user && <FaUserCircle className='fs-2 mt-1'></FaUserCircle>
                        }
                       
                          { user ?
                            <Button onClick={handleLogOut} variant="secondary">LogOut</Button> :
                            <Link to='/login'>
                               <Button variant="secondary">Login</Button>
                            </Link>
                           }
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </Container>
    );
};

export default NavigationBar;