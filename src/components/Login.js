import React, { useRef, useState } from 'react'
import { Alert, Card, Button, Form } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link,useHistory} from 'react-router-dom'
export default function Login() {
    const { login, currentUser } = useAuth()
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    console.log(currentUser, 'CURRRENT SUER')
    async function handleSubmit(e) {
        e.preventDefault();


        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        }
        catch (err) {
setError('failed to sign in')
        }
        finally {
            setLoading(false)
        }
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Login</h2>
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
                        <Button disabled={loading} className='w-100' type='submit'>Login In</Button>
                    </Form>
                    <div className='w-100 text-center mt-2'>
                 <Link to='/forgot-password'>Forgot Password?</Link>
            </div>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Need an account ? <Link to='signup'>Sign Up</Link>
            </div>
        </>
    )
}
