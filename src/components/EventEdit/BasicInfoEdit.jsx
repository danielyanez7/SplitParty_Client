import React, { useEffect, useState } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"

const BasicInfoEdit = ({ handleNext, formData, handleInputChange }) => {

    const [date, setDate] = useState()

    useEffect(() => {
        formData.date && setDate(new Date(formData.date))
    }, [formData])

    // const handleDateChange = (event) => {

    //     const { name, value } = event.target

    //     let dateCopy = { ...date }

    //     if (name === 'date') {
    //         // aqui le cambias el a;o mes y dia para que sea ano, mes, dia 
    //         const [year, month, day] = value.split("-")
    //         dateCopy.setFullYear(year)
    //         dateCopy.setMonth(month)
    //         dateCopy.setDate(day)
    //     }

    //     if (name === 'time') {
    //         // aqui le cambias la hora y los minutos 
    //         const [hour, minute] = value.split(":")
    //         dateCopy.setHours(hour)
    //         dateCopy.setMinutes(minute)
    //     }

    //     setDate(dateCopy)
    //     handleInputChange({ target: { name: "date", value: dateCopy.toISOString() } })
    // }

    return (
        <>
            <Form.Group className="m-3" controlId="name">
                <Form.Label>Event Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />
            </Form.Group>
            <Row>
                <Col className="col-md-6">
                    <Form.Group className="m-3" controlId="date">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                            type="date"
                            name="date"
                            value={date?.toISOString().substr(0, 10)}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Col>
                <Col className="col-md-6">
                    <Form.Group className="m-3" controlId="time">
                        <Form.Label>Time</Form.Label>
                        <Form.Control
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="dark" onClick={handleNext}>
                Next
            </Button>
        </>
    )
}

export default BasicInfoEdit