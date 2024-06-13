import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';

import { useLoginMutation } from '../../slices/userApiSlice';
import { setCredentials } from '../../slices/authSlice';
import { toast } from 'react-toastify';
// import CheckoutSteps from '../components/CheckoutSteps';
import './Login.css'

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [login, { isLoading }] = useLoginMutation();

    const { userInfo } = useSelector((state) => state.auth);

    const { search } = useLocation();
    const sp = new URLSearchParams(search);
    const redirect = sp.get('redirect') || '/';

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [navigate, redirect, userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await login({ email, password }).unwrap();
            dispatch(setCredentials({ ...res }));
            navigate(redirect);
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }
    };

    return (
        <>
            <FormContainer >
                <Form onSubmit={submitHandler} className='d-flex row border border-dark rounded-5 p-5'>
                    <h2 className='text-center'>Sign In</h2>
                    <Form.Group className='my-2' controlId='email'>
                        <Form.Label style={{ fontWeight: '500' }}>Email Address</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='abc@gmail.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                             className='shad'
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group className='my-2' controlId='password'>
                        <Form.Label style={{ fontWeight: '500' }}>Password</Form.Label>
                        <Form.Control
                            type={showPassword ? 'text' : 'password'}
                            placeholder='**********'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='shad'
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group className='my-2' controlId='showPassword'>
                        <Form.Check 
                            type='checkbox' 
                            label='Show Password' 
                            checked={showPassword} 
                            onChange={(e) => setShowPassword(e.target.checked)} 
                        />
                    </Form.Group>

                    <Button disabled={isLoading} type='submit' variant='dark' className='mt-3 but'>
                        Sign In
                    </Button>
                </Form>
                <Row className='py-3'>
                    <Col>
                        New Customer?{' '}
                        <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                            Register
                        </Link>
                    </Col>
                </Row>
            </FormContainer>
        </>
    );
};

export default LoginScreen;
