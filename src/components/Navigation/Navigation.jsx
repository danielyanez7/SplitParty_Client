import './Navigation.css'
import { useContext } from 'react'
import { Dropdown, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'

const Navigation = () => {

    const { user, logout } = useContext(AuthContext)

    return (
        <Navbar variant="dark" className='custom-navbar px-3'>
            <Link to="/">
                <Navbar.Brand as="span">Split Party</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {
                        user
                        &&
                        <>
                            <Link to="/events">
                                <Nav.Link as="span">Events</Nav.Link>
                            </Link>

                            <Link to="/users">
                                <Nav.Link as="span">Community</Nav.Link>
                            </Link>
                        </>
                    }
                </Nav>

                <Nav>
                    {
                        user
                            ?
                            <>
                                <Dropdown align="end">
                                    <Dropdown.Toggle variant="light" title="Dropdown end" className='dropdownButton'>
                                        <img src={user.avatar} alt={user.username} className='profileButtonImage' />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Link to="/profile">
                                            <Dropdown.Item as="span" >Profile</Dropdown.Item>
                                        </Link>
                                        <Dropdown.Divider />
                                        <Link to="/">
                                            <Dropdown.Item as="span" onClick={logout}>Log out</Dropdown.Item>
                                        </Link>
                                    </Dropdown.Menu>

                                </Dropdown>
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
        </Navbar>
    )
}

export default Navigation