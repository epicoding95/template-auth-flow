import React, { useRef, useState } from 'react'
import { Alert, Card, Button, Form } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
export default function Signup() {
    const { signup, currentUser } = useAuth()
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    console.log(currentUser, 'CURRRENT SUER')
    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords to not match')
        }
        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        }
        catch (err) {
setError('failed to create an account')
        }
        finally {
            setLoading(false)
        }
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Sign Up</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label> Email</Form.Label>
                            <Form.Control ref={emailRef} type='email' required></Form.Control>
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label> password</Form.Label>
                            <Form.Control ref={passwordRef} type='password' required></Form.Control>
                        </Form.Group>
                        <Form.Group id='password-confirm'>
                            <Form.Label> password-confirm</Form.Label>
                            <Form.Control ref={passwordConfirmRef} type='password-confirm' required></Form.Control>
                        </Form.Group>
                        <Button disabled={loading} className='w-100' type='submit'>Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Already have an account ? <Link to='/Login'>Log In</Link>
            </div>
        </>
    )
}
