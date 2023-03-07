import axios from 'axios'

class EventsService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/events`
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

    editEvent(event_id) {
        return this.api.get(`/editEvent/${event_id}`)
    }

    deleteEvent(event_id) {
        return this.api.get(`/deleteEvent/${event_id}`)
    }

}

const eventsService = new EventsService()

export default eventsService