import { useState, useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import usersService from "../../services/users.services"
import UserEvents from "../UserEvents/UserEvents"
import Loader from "../../components/Loader/Loader"

const EventList = () => {

    const [friends, setFriends] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            loadFriends()
            setIsLoading(false)
        }, 500)
    }, [])

    const loadFriends = () => {

        usersService
            .getFriends()
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
                    friends?.map(friend => {
                        return (
                            <>
                                <UserEvents friend={friend} />
                            </>
                        )
                    })
            }
        </>

    )
}

export default EventList