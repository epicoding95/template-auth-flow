import React, { useRef, useState } from 'react'
import { Alert, Card, Button, Form } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
export default function ForgotPassword() {
    const { resetPassword, currentUser } = useAuth()
    const emailRef = useRef();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [resetMessage, setResetMessage] = useState('')
    console.log(currentUser, 'CURRRENT SUER')
    async function handleSubmit(e) {
        e.preventDefault();


        try {
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setResetMessage('Check your inbox for further instructions')
        }
        catch (err) {
            setError('failed to reset password')
        }
        finally {
            setLoading(false)
        }
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Forgot Password</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    {resetMessage && <Alert variant='success'>{resetMessage}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label> Email</Form.Label>
                            <Form.Control ref={emailRef} type='email' required></Form.Control>
                        </Form.Group>

                        <Button disabled={loading} className='w-100' type='submit'>Reset Password</Button>
                    </Form>
                    <div className='w-100 text-center mt-2'>
                        <Link to='/login'>Login?</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Need an account ? <Link to='signup'>Sign Up</Link>
            </div>
        </>
    )
}
