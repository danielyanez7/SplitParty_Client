import { useState, useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import usersService from "../../services/users.services"
import UserEvents from "../UserEvents/UserEvents"
import Loader from "../../components/Loader/Loader"
import { Link } from "react-router-dom"


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
                    friends.length > 0
                        ?
                        friends.map(friend => {
                            return (
                                <>
                                    <UserEvents friend={friend} />
                                </>
                            )
                        })
                        :
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <h5 style={{ textAlign: 'center', maxWidth: '100%' }}>Oh, so sad, you don't have friends, you can find some in our <Link>community</Link> or discover new friends at </h5>
                                <Link to={"/users"} style={{ marginBottom: '1rem' }}>
                                    <img src='https://res.cloudinary.com/dztjq7i4a/image/upload/v1678962831/buscoAmigos_cuo9uh.png' alt='No friends' />
                                </Link>
                            </div>
                        </div>
            }
        </>

    )
}

export default EventList


