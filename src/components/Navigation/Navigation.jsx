import { useContext } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'

const Navigation = () => {

    const { user, logout } = useContext(AuthContext)
    return (
        <Navbar bg="dark" variant="dark" expand="md" className='mb-4'>
            <Container>
                <Navbar.Brand href="/">Split Party</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/events">
                            <Nav.Link as="span">Event List</Nav.Link>
                        </Link>
                        <Link to="/events/create">
                            <Nav.Link as="span">Create Event</Nav.Link>
                        </Link>








                    </Nav>
                    <Nav>
                        {
                            user
                                ?
                                <>
                                    <Navbar.Text>{user.username} |</Navbar.Text>
                                    <Link to="/">
                                        <Nav.Link as="span" onClick={logout}>Log Out</Nav.Link>
                                    </Link>
                                </>
                                :
                                <>
                                    <Link to="/login">
                                        <Nav.Link as="span">Log In</Nav.Link>
                                    </Link>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation