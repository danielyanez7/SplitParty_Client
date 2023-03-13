import { useContext } from "react"
import { Container } from "react-bootstrap"
import UserDetails from "../../components/UserDetails/UserDetails"
import { AuthContext } from "../../context/auth.context"

const ProfilePage = () => {

    const { user: owner } = useContext(AuthContext)

    return (
        <Container>
            <UserDetails user={owner} />
        </Container>
    )
}

export default ProfilePage