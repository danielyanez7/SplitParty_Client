import authService from "../services/auth.service";

const { createContext, useState, useEffect } = require("react");

const AuthContext = createContext()

const AuthProviderWrapper = props => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const authenticateUser = () => {

        const token = localStorage.getItem('authToken')

        if (token) {
            authService
                .verify(token)
                .then(({ data }) => {
                    setUser(data)
                    setLoading(false)
                })
                .catch(err => logout())
        } else {
            logout()
        }
    }

    const logout = () => {
        localStorage.removeItem('authToken')
        setUser(null)
        setLoading(false)
    }

    useEffect(() => {
        authenticateUser()
    }, [])

    const storedToken = (token) => {
        localStorage.setItem('authToken', token)
    }

    const refreshToken = () => {
        authService
            .updateToken()
            .then(({ data }) => {
                storedToken(data)
                authenticateUser()
            })
            .catch(err => console.log(err))
    }

    return (
        <AuthContext.Provider value={{ authenticateUser, user, logout, loading, refreshToken }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProviderWrapper }