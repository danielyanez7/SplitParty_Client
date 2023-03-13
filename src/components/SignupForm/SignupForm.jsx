import { useContext, useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { MessageContext } from "../../context/message.context"
import authService from "../../services/auth.service"
import uploadServices from "../../services/upload.service"



const SignupForm = () => {

    const [signupData, setSignUpData] = useState({
        username: '',
        email: '',
        password: '',
        avatar: ''
    })

    const navigate = useNavigate()
    const { emitMessage } = useContext(MessageContext)


    const handleInputChange = e => {

        const { value, name } = e.target
        setSignUpData({ ...signupData, [name]: value })

    }

    const handleFormSubmit = e => {

        e.preventDefault()

        authService
            .signup(signupData)
            .then(() => {
                emitMessage('Welcome to SplitParty, please Log in')
                navigate('/login')
            })
            .catch(err => console.log(err))
    }

    const handleFileUpload = e => {

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setSignUpData({ ...signupData, avatar: res.data.cloudinary_url })
            })
            .catch(err => console.log(err))

    }

    const { username, email, password, avatar } = signupData

    return (
        <Form onSubmit={handleFormSubmit}>

            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name="username" value={username} onChange={handleInputChange} required />
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
                <Form.Control type="file" name="avatar" onChange={handleFileUpload} />
            </Form.Group>


            <div className="d-grid">
                <Button variant="dark" type="submit">Sign Up</Button>
            </div>

        </Form>
    )
}

export default SignupForm 