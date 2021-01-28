import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { useHistory } from 'react-router-dom'
export default function DashBoard() {
    const [error, setError] = useState('')
    const { currentUser, logout } = useAuth()
    const history = useHistory()
    async function handleLogout() {
        setError('')
        try {
            await logout()
            history.pushState('/login')
        } catch (err) {
            setError('failed out log out')
        }
    }
    return (
        <>
            <Card>
                <Card.Body>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <h2 className='text-center mb-4'>Dashboard</h2>
                    <strong>Email: {currentUser.email}</strong>

                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                <Button onClick={handleLogout}>Log Out</Button>
            </div>
        </>
    )
}
