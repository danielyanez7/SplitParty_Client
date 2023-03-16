import './EventList.css'
import { useState, useEffect } from "react"
import usersService from "../../services/users.services"
import UserEvents from "../UserEvents/UserEvents"
import Loader from "../../components/Loader/Loader"
import { Link } from "react-router-dom"


const EventList = () => {

    const [friends, setFriends] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const loadFriends = () => {

        usersService
            .getFriends()
            .then(({ data }) => setFriends(data.friends))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        setTimeout(() => {
            loadFriends()
            setIsLoading(false)
        }, 1000)
    }, [])

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
                        <div className="event-list-center">
                            <h5>Oh, so sad, you don't have friends, you can find some in our <Link to={"/users"} className="purple-text">community</Link> or discover new friends at </h5>
                            <Link to={"/users"}>
                                <img src='https://res.cloudinary.com/dztjq7i4a/image/upload/v1678962831/buscoAmigos_cuo9uh.png' alt='No friends' className="white-icon" />
                            </Link>
                        </div>
            }
        </>

    )
}

export default EventList


