import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
import Loader from "../components/Loader/Loader"
import { AuthContext } from "../context/auth.context"


const ProtectedRoute = () => {

    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <Loader />
    }

    if (!user) {
        return <Navigate to="/login" />
    }

    return <Outlet />
}

export default ProtectedRoute