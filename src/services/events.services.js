import axios from 'axios'

class EventsService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/events`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    getAllEvents() {
        return this.api.get('/getAllEvents')
    }

    saveEvent(eventData) {
        return this.api.post('/saveEvent', eventData)
    }

    getOneEvent(event_id) {
        return this.api.get(`/getOneEvent/${event_id}`)
    }

    editEvent(event_id, eventData) {
        return this.api.put(`/editEvent/${event_id}`, eventData)
    }

    deleteEvent(event_id) {
        return this.api.delete(`/deleteEvent/${event_id}`)
    }

    getUserEvents(user_id) {
        return this.api.get(`/getUserEvents/${user_id}`)
    }

    getJoinedEvents() {
        return this.api.get('/getJoinedEvents')
    }

    joinEvent(owner_id, event_id) {
        return this.api.put('/joinEvent', { owner_id, event_id })
    }

}

const eventsService = new EventsService()

export default eventsService