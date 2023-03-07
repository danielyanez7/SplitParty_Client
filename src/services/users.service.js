import axios from 'axios'

class UsersService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/users`
        })
    }

    getAllUsers() {
        return this.api.get('/getAllUsers')
    }

    getOneUser() {
        return this.api.get(`/getOneUser/${user_id}`)
    }

}

const usersService = new UsersService()

export default usersService