import UsersList from "../../components/UsersList/UsersList"
import { useState, useEffect } from "react"
import usersService from "../../services/users.services"
import { Container, Row } from "react-bootstrap"


const UsersListPage = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = () => {
        usersService
            .getAllUsers()
            .then(({ data }) => setUsers(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <Row className="footer-heigth">
                <h1>Community Page</h1>
                <hr />
                {
                    <UsersList users={users} />
                }
            </Row>
        </Container>


    )
}

export default UsersListPage