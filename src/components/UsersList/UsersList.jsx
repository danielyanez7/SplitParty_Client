import { Col, Row } from "react-bootstrap"
import UserCard from "../UserCard/UserCard"


const UsersList = ({ users }) => {

    return (
        <Row>
            {
                users.map(elm => {
                    return (
                        <Col md={{ span: 6 }} key={elm._id} className='p-2'>
                            <UserCard elm={elm} />
                        </Col>
                    )
                })
            }
        </Row>
    )
}

export default UsersList