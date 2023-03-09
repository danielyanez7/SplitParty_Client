import { useState } from 'react'
import { Toast } from 'react-bootstrap'

const FormError = ({ children }) => {
    const [show, setShow] = useState(true)

    const handleClose = () => setShow(false)

    return (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <Toast show={show} onClose={handleClose} className="mx-auto" style={{ backgroundColor: 'rgba(0, 255, 0, 0.5)' }}>
                <Toast.Header closeButton>
                    <strong className="mr-auto">Error</strong>
                </Toast.Header>
                <Toast.Body>{children}</Toast.Body>
            </Toast>
        </div>
    )
}

export default FormError
