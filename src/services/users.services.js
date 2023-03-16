import axios from 'axios'

class UsersService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/users`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    getAllUsers() {
        return this.api.get('/getAllUsers')
    }

    getOneUser(user_id) {
        return this.api.get(`/getOneUser/${user_id}`)
    }

    editUser(user_id, userData) {
        return this.api.put(`/editUser/${user_id}`, userData)
    }

    addEventToUser(owner_id, event_id) {
        return this.api.put('/addEventToUser', { owner_id, event_id })
    }

    addFriend(owner_id, user_id) {
        return this.api.put('/addFriend', { owner_id, user_id })
    }

    deleteFriend(owner_id, user_id) {
        return this.api.put('/deleteFriend', { owner_id, user_id })
    }

    getFriends() {
        return this.api.get('/getFriends')
    }

}

const usersService = new UsersService()

export default usersService
