import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';

import { useRegisterMutation } from '../../slices/userApiSlice';
import { setCredentials } from '../../slices/authSlice';
import { toast } from 'react-toastify';
import './Login.css'

const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [register, { isLoading }] = useRegisterMutation();

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
        if (password !== confirmPassword) {
            toast.error('Password do not match')
            return;
        } else {
            try {
                const res = await register({ name, email, password }).unwrap();
                dispatch(setCredentials({ ...res }));
                navigate(redirect);
            } catch (err) {
                toast.error(err?.data?.message || err.error);
            }
            toast.success("Successfully created account!")
        }
    };

    return (
        <FormContainer>

            <Form onSubmit={submitHandler} className='d-flex row border border-dark rounded-5 p-5'>
                <h2 className='text-center'>Sign Up</h2>
                <Form.Group className='my-2' controlId='name'>
                    <Form.Label style={{ fontWeight: '500' }}>User Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='John Doe'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                         className='shad'
                        required
                    ></Form.Control>
                </Form.Group>

                <Form.Group className='my-2' controlId='email'>
                    <Form.Label style={{ fontWeight: '500' }}>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='john@gmail.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                         className='shad'
                        required
                    ></Form.Control>
                </Form.Group>

                <Form.Group className='my-2' controlId='password'>
                    <Form.Label style={{ fontWeight: '500' }}>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='**********'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                         className='shad'
                        required
                    ></Form.Control>
                </Form.Group>

                <Form.Group className='my-2' controlId='confirmPassword'>
                    <Form.Label style={{ fontWeight: '500' }}>Confirm Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='**********'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                         className='shad'
                        required
                    ></Form.Control>
                </Form.Group>

                <Button disabled={isLoading} type='submit' variant='dark' className='mt-3 but'>
                    Register
                </Button>

            </Form>
            <Row className='py-3'>
                <Col>
                    Already have an account?{' '}
                    <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                        Login
                    </Link>
                </Col>
            </Row>
        </FormContainer>
    );
};

export default RegisterScreen;