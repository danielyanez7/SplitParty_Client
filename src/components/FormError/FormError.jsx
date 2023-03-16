import Alert from 'react-bootstrap/Alert'

const FormError = ({ children }) => {
    return (
        <Alert className="delete-button" style={{ textAlign: 'center', fontSize: '.8em', width: '20%', position: 'absolute', right: '0', bottom: '0' }}>
            {children}
        </Alert>
    )
}

export default FormError