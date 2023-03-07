import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import authService from "../../services/auth.service"



const SignupForm = () => {

    const [signupData, setsignupData] = useState({
        username: '',
        email: '',
        password: '',
        avatar: ''
    })

    const navigate = useNavigate()

    const handleInputChange = e => {

        const { value, name } = e.target
        setsignupData({ ...signupData, [name]: value })

    }

    const handleFormSubmit = e => {

        e.preventDefault()

        authService
            .signup(signupData)
            .then(() => navigate('/login'))
            .catch(err => console.log(err))
    }

    const { username, email, password, avatar } = signupData

    return (
        <Form onSubmit={handleFormSubmit}>

            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name="username" value={username} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={email} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={password} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="avatar">
                <Form.Label>Avatar</Form.Label>
                <Form.Control type="file" name="avatar" value={avatar} onChange={handleInputChange} />
            </Form.Group>


            <div className="d-grid">
                <Button variant="dark" type="submit">Sign Up</Button>
            </div>

        </Form>
    )
}

export default SignupForm 