import authService from "../services/auth.service";

const { createContext, useState, useEffect } = require("react");

const AuthContext = createContext()

const AuthProviderWrapper = props => {

    const [user, setUser] = useState(null)

    const authenticateUser = () => {

        const token = localStorage.getItem('authToken')

        if (token) {

            authService
                .verify(token)
                .then(({ data }) => setUser(data))
                .catch(err => logout())

        }
    }

    const logout = () => {
        localStorage.removeItem('authToken')
        setUser(null)
    }

    useEffect(() => {
        authenticateUser()
    }, [])

    return (
        <AuthContext.Provider value={{ authenticateUser, user, logout }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProviderWrapper }