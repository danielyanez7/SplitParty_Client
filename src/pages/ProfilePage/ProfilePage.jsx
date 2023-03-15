import { useContext } from "react"
import { Container } from "react-bootstrap"
import JoinedEvents from "../../components/JoinedEvents/JoinedEvents"
import MyEvents from "../../components/MyEvents/MyEvents"
import UserDetails from "../../components/UserDetails/UserDetails"
import { AuthContext } from "../../context/auth.context"

const ProfilePage = () => {

    const { user: owner } = useContext(AuthContext)

    return (
        <Container className="pt-3">
            <UserDetails user={owner} />
            <MyEvents />
            <JoinedEvents />
        </Container>
    )
}

export default ProfilePage