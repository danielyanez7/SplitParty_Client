import { useState, useEffect } from "react"
import { Row } from "react-bootstrap"
import usersService from "../../services/users.services"
import UserEvents from "../UserEvents/UserEvents"

const EventList = () => {

    const [friends, setFriends] = useState([])

    useEffect(() => {
        loadFriendsAndEvents()
    }, [])

    const loadFriendsAndEvents = () => {

        usersService
            .getFriendsAndEvents()
            .then(({ data }) => setFriends(data.friends))
            .catch(err => console.log(err))
    }

    return (
        <>
            {
                friends.map(friend => {
                    return (
                        <>
                            <Row md={{ span: 6 }} className='p-3'>
                                <UserEvents friend={friend} />
                            </Row>
                            <hr />
                        </>
                    )
                })
            }
        </>

    )
}

export default EventList