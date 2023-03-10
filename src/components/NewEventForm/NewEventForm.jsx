import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Tabs, Tab, Form } from "react-bootstrap"
import eventsService from "../../services/events.services"
import ProductSelector from "./ProductTab"
import BasicInfoTab from "./BasicInfoTab"
import DetailsTab from "./DetailsTab"
import ConfirmTab from "./ConfirmTab"
import FormError from "../FormError/FormError"

const NewEventForm = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({})
    const [activeTab, setActiveTab] = useState("basic")
    const [lastTab, setLastTab] = useState(false)
    const [errors, setErrors] = useState([])

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
            .saveEvent(formData)
            .then(({ data }) => {
                navigate('/events')
            })
            .catch(err => setErrors(err.response.data.errorMessages))
    }

    const handleProductsChange = (products) => {
        setFormData({ ...formData, products })
    }

    return (
        <Form onSubmit={handleFormSubmit}>

            <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="flex-nowrap">

                <Tab eventKey="basic" title="Basic Information">
                    <BasicInfoTab
                        formData={formData}
                        setFormData={setFormData}
                        handleNext={handleNext}
                    />
                </Tab>


                <Tab eventKey="details" title="Event Details">
                    <DetailsTab
                        formData={formData}
                        handleNext={handleNext}
                        handleFormDataChange={(e) =>
                            setFormData({ ...formData, [e.target.name]: e.target.value })
                        }
                    />
                </Tab>

                <Tab eventKey="products" title="Products">
                    <ProductSelector
                        handleProductsChange={handleProductsChange}
                        handleNext={handleNext}
                    />
                </Tab>

                <Tab eventKey="confirm" title="Confirmation">
                    <ConfirmTab
                        formData={formData}
                        setFormData={setFormData}
                        handleNext={handleNext}
                        handleFormSubmit={handleFormSubmit}
                    />
                </Tab>

            </Tabs>
            {errors.length > 0 && <FormError>{errors.map(elm => <p>{elm}</p>)}</FormError>}
        </Form>
    );
};

export default NewEventForm

