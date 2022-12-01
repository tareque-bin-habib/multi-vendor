import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";

import './Register.css'
import { GoogleAuthProvider } from 'firebase/auth';

const Register = () => {
    const [error, setError] = useState(null)
    const { createUserWithEmail, google } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;


        if (password !== confirm) {
            setError('You password did not match')
            return
        }

        createUserWithEmail(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
            })
            .catch(error => console.error(error))
    }

    const handleGoogle = () => {
        const provider = new GoogleAuthProvider();
        google(provider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate('/')
            })
            .catch(error => console.error(error))

    }

    return (
        <div className='form-container'>
            <h5 className='text-center mt-5 fw-bold form-title'>Please Register</h5>
            <Form onSubmit={handleSubmit} className='d-flex justify-content-center align-items-center mt-5'>
                <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className='w-100' type="email" name='email' placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='w-100' type="password" name='password' placeholder="Enter Your password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm password!</Form.Label>
                        <Form.Control className='w-100' type="password" name='confirm' placeholder="Confirm your Password" />
                    </Form.Group>
                    <div>
                        <p>Already have an account? <Link to='/login'>login</Link> </p>
                    </div>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Form.Text className="text-danger">
                        <p>{error}</p>
                    </Form.Text>
                </div>
            </Form>
            <div className='d-flex justify-content-center mt-3'>
                <button onClick={handleGoogle} className='me-3 google'><FaGoogle></FaGoogle></button>
                <button className='me-3 facebook'><FaFacebook></FaFacebook></button>
                <button className='me-3 twitter'><FaTwitter></FaTwitter></button>
            </div>
        </div>
    );
};

export default Register;