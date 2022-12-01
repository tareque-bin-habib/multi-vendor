import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './LogIn.css'
const LogIn = () => {

    const { signInWithPassword } = useContext(AuthContext)
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInWithPassword(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='form-container'>
            <h5 className='text-center mt-5 fw-bold form-title'>Please Login</h5>
            <Form onSubmit={handleSubmit} className='d-flex justify-content-center align-items-center mt-5'>
                <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className='w-100' type="email" name='email' placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='w-100' type="password" name='password' placeholder="Password" />
                    </Form.Group>
                    <div>
                        <p>New to Multi Vendor? Please <Link to='/register'>Register</Link> </p>
                    </div>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </div>
            </Form>
        </div>
    );
};

export default LogIn;