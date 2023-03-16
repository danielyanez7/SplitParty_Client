import { useContext, useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"

import { AuthContext } from "../../context/auth.context"
import usersService from "../../services/users.services"

import JoinedEvents from "../../components/JoinedEvents/JoinedEvents"
import MyEvents from "../../components/MyEvents/MyEvents"
import UserDetails from "../../components/UserDetails/UserDetails"


const ProfilePage = () => {

    const { user: owner } = useContext(AuthContext)

    const [user, setUser] = useState({})

    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = () => {
        usersService
            .getOneUser(owner._id)
            .then(({ data }) => setUser(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <Row className="footer-heigth">
                <UserDetails user={user} />
                <MyEvents id={user._id} />
                <JoinedEvents />
            </Row>
        </Container>
    )
}

export default ProfilePage