import { useContext } from 'react'
import { Toast } from 'react-bootstrap'
import { MessageContext } from '../../context/message.context'

const UserMessage = () => {

    const { closeToast, toastMessage, showToast } = useContext(MessageContext)

    return (
        <Toast onClose={closeToast} show={showToast} delay={3000} autohide style={{ position: 'fixed', bottom: 10, right: 10, backgroundColor: "#68fe9A", color: "#060606" }}>
            <Toast.Header>
                <strong className="me-auto" style={{ color: "#060606" }}>SplitParty Message</strong>
            </Toast.Header>
            <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
    )
}

export default UserMessage 
