import { useState } from 'react'
import { Toast } from 'react-bootstrap'

const FormError = ({ children }) => {
    const [show, setShow] = useState(true)

    const handleClose = () => setShow(false)

    return (
        <div style={{ position: 'fixed', top: '10px', right: '10px' }}>
            <Toast show={show} onClose={handleClose}>
                <Toast.Header closeButton>
                    <strong className="mr-auto">Error</strong>
                </Toast.Header>
                <Toast.Body>{children}</Toast.Body>
            </Toast>
        </div>
    )
}

export default FormError
