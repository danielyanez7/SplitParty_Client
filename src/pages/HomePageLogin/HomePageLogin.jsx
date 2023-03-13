import './HomePageLogin.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomePageLogin = () => {
    return (
        <div className="centered background-image-hpl">
            <div className='box-opacity'>
                <h1 className="larger">Create your event</h1>
                <div className="button-group">
                    <Link to="/events/create">
                        <Button variant="dark" className='grow'>From Scratch</Button>
                    </Link>

                    <Link to="/events">
                        <Button variant="dark" className='grow'>Join a Friend Event</Button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default HomePageLogin
