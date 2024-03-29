import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import SignupPage from "../pages/SignupPage/SignupPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import ProfileEditPage from "../pages/ProfileEditPage/ProfileEditPage"
import UsersListPage from "../pages/UserListPage/UserListPage"
import UserDetailsPage from "../pages/UserDetailsPage/UserDetailsPage"
import EventsListPage from "../pages/EventsListPage/EventsListPage"
import NewEventPage from "../pages/NewEventPage/NewEventPage"
import EventDetailsPage from "../pages/EventDetailsPage/EventDetailsPage"
import EventEditPage from "../pages/EventEditPage/EventEditPage"
import ProtectedRoute from "./ProtectedRoutes"


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/users" element={<UsersListPage />} />
            <Route path="/users/:id" element={<UserDetailsPage />} />

            <Route element={<ProtectedRoute />}>
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/profile/edit" element={<ProfileEditPage />} />
                <Route path="/events/create" element={<NewEventPage />} />
                <Route path="/events/:id/edit" element={<EventEditPage />} />
                <Route path="/events" element={<EventsListPage />} />
                <Route path="/events/:id" element={<EventDetailsPage />} />
            </Route>

            <Route path="*" element={<img src="https://www.acceseo.com/wp-content/uploads/2020/11/guia-errores-404.png" alt="" />} />
        </Routes>
    )
}

export default AppRoutes