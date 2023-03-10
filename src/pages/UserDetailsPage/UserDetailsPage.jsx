import { Container, Row, Col } from "react-bootstrap"
import UserDetails from "../../components/UserDetails/UserDetails"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import usersService from "../../services/users.services"

const UserDetailsPage = () => {

    const { id } = useParams()

    const [user, setUser] = useState({})

    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = () => {
        usersService
            .getOneUser(id)
            .then(({ data }) => setUser(data))
            .catch(err => console.log(err))
    }
    return (
        <Container>
            <h1>User Details</h1>
            <hr />
            <Row>
                <Col md={{ span: 6, offset: 1 }} className="centered">
                    <UserDetails user={user} />
                </Col>
            </Row>
        </Container>
    )
}

export default UserDetailsPage
