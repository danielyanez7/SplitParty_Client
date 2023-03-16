import { useState, useEffect } from "react"
import { Row } from "react-bootstrap"
import usersService from "../../services/users.services"
import UserEvents from "../UserEvents/UserEvents"
import Loader from "../../components/Loader/Loader"

const EventList = () => {

    const [friends, setFriends] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    }, [])

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
                isLoading
                    ?
                    <Loader />
                    :
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