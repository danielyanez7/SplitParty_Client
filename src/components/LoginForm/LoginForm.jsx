import { useContext, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import { MessageContext } from '../../context/message.context'
import authService from '../../services/auth.service'
import * as Constants from './../../consts'

const LoginForm = () => {

    const navigate = useNavigate()

    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })

    const { authenticateUser, user } = useContext(AuthContext)
    const { emitMessage } = useContext(MessageContext)


    const handleInputChange = e => {

        const { value, name } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleFormSubmit = e => {

        e.preventDefault()

        authService
            .login(loginData)
            .then(({ data }) => {
                localStorage.setItem('authToken', data.authToken)
                authenticateUser(data.authToken)
                emitMessage(Constants.LOGGED_MSG)
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    const { username, password } = loginData

    return (
        <Form onSubmit={handleFormSubmit}>

            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name="username" value={username} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={password} onChange={handleInputChange} />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit" className="green-button">Log In</Button>
            </div>

            Don't have an account? <Link to="/signup" className='purple-text'>Create an account here</Link>

        </Form>
    )
}

export default LoginForm