import { useContext, useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/auth.context"
import uploadServices from "../../services/upload.service"
import usersService from "../../services/users.services"


const UserEditForm = () => {

    const { user } = useContext(AuthContext)
    const [userData, setUserData] = useState(user)

    const navigate = useNavigate()

    const handleInputChange = e => {

        const { value, name } = e.target
        setUserData({ ...userData, [name]: value })

    }

    const handleFormSubmit = e => {

        e.preventDefault()



        usersService
            .editUser(user._id, userData)
            .then(() => navigate('/profile'))
            .catch(err => console.log(err))
    }

    const handleFileUpload = e => {

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setUserData({ ...userData, avatar: res.data.cloudinary_url })
            })
            .catch(err => console.log(err))

    }

    const { username, email, avatar } = userData

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

            <Form.Group className="mb-3" controlId="avatar">
                <Form.Label>Avatar</Form.Label>
                <Form.Control type="file" name="avatar" onChange={handleFileUpload} />
            </Form.Group>


            <div className="d-grid">
                <Button variant="dark" type="submit">Save</Button>
            </div>

        </Form>
    )
}

export default UserEditForm
