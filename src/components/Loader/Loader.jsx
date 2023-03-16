import { Spinner } from "react-bootstrap"
import './Loader.css'


const Loader = () => {
    return (
        <div className="loader-container">
            <Spinner variant="light" animation="border" size="sm" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}

export default Loader