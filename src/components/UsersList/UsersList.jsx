import { Col, Row } from "react-bootstrap"
import UserCard from "../UserCard/UserCard"
import Loader from "../../components/Loader/Loader"
import { useEffect, useState } from "react"

const UsersList = ({ users }) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [users])


    return (
        <Row>
            {
                isLoading
                    ?
                    <Loader />
                    :
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