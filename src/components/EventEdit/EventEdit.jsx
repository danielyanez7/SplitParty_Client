import React, { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Tabs, Tab, Form } from "react-bootstrap"

import eventsService from "../../services/events.services"
import usersService from "../../services/users.services"

import BasicInfoEdit from "./BasicInfoEdit"
import DetailsEdit from "./DetailsEdit"
import ProductsEdit from "./ProductsEdit"
import ConfirmEdit from "./ConfirmEdit"

import FormError from "../FormError/FormError"
import { MessageContext } from "../../context/message.context"

const EventEdit = () => {

    const navigate = useNavigate()

    const { id } = useParams()

    const [event, setEvent] = useState({})
    const [formData, setFormData] = useState({})

    const [activeTab, setActiveTab] = useState("basic")
    const [lastTab, setLastTab] = useState(false)
    const [errors, setErrors] = useState([])
    const { emitMessage } = useContext(MessageContext)


    useEffect(() => {
        eventsService
            .getOneEvent(id)
            .then(({ data }) => {
                setEvent(data)
                setFormData(data)
            })
            .catch(err => console.log(err))
    }, [])


    const handleInputChange = e => {

        const { value, name } = e.target
        setFormData({ ...formData, [name]: value })

    }

    const handleNext = () => {

        const tabs = ["basic", "details", "products", "confirm"]
        const currentIndex = tabs.indexOf(activeTab)

        if (currentIndex < tabs.length - 1) {
            setActiveTab(tabs[currentIndex + 1])
        } else {
            setLastTab(true)
        }
    }

    const handleFormSubmit = e => {

        e.preventDefault()

        eventsService
            .editEvent(id, formData)
            .then(({ data }) => {
                emitMessage('Your event has been edited')
                usersService.addEventToUser(data.owner, data._id)
                navigate(`/events/${data._id}`)
            })
            .catch(err => setErrors(err.response.data.errorMessages))
    }

    const handleProductsChange = (products) => {
        setFormData({ ...formData, products: products })
    }

    return (
        <Form onSubmit={handleFormSubmit}>

            <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>

                <Tab eventKey="basic" title="Basic Information">
                    <BasicInfoEdit
                        handleNext={handleNext}
                        handleInputChange={handleInputChange}
                        formData={formData}
                    />
                </Tab>


                <Tab eventKey="details" title="Event Details">
                    <DetailsEdit
                        handleNext={handleNext}
                        handleInputChange={handleInputChange}
                        formData={formData}
                    />
                </Tab>

                <Tab eventKey="products" title="Products">
                    <ProductsEdit
                        handleProductsChange={handleProductsChange}
                        handleInputChange={handleInputChange}
                        handleNext={handleNext}
                        event={event}
                        formData={formData}
                    />
                </Tab>

                <Tab eventKey="confirm" title="Confirmation">
                    <ConfirmEdit
                        formData={formData}
                        handleNext={handleNext}
                        handleFormSubmit={handleFormSubmit}
                        event={event}
                    />
                </Tab>

            </Tabs>
            {errors.length > 0 && <FormError>{errors.map(elm => <p>{elm}</p>)}</FormError>}
        </Form>
    )
}

export default EventEdit

