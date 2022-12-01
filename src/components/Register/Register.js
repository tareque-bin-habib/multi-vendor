import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Register.css'

const Register = () => {
    const [error, setError] = useState(null)
    const { createUserWithEmail } = useContext(AuthContext)

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
        </div>
    );
};

export default Register;