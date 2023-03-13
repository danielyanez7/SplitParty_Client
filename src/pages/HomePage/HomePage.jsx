import './HomePage.css'
import { Row, Col, Button, Carousel, Container, Image, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomePage = () => {

    const carouselImages = [
        "https://img.freepik.com/foto-gratis/gente-sonriente-tiro-medio-festejando-juntos_52683-93723.jpg?w=900&t=st=1678636699~exp=1678637299~hmac=f9b7fc35262c4f3703fc2e9110958032e3cbedc5aa99d054d79668eb643a4207",
        "https://img.freepik.com/foto-gratis/amigos-posando-bebidas-fiesta_23-2148231963.jpg?w=900&t=st=1678636703~exp=1678637303~hmac=4ed8c207112b02fc3f0a5e22c6eebaa8d05ca34c8a5c8ef522d2a101307b2228",
        "https://img.freepik.com/foto-gratis/amigos-sonrientes-tiro-medio-fiesta_23-2149525608.jpg?w=900&t=st=1678636715~exp=1678637315~hmac=d10e99a6470f2c173379f1ecc240b213c731dd00b0f4bc97e1ead739c5a44078",
        "https://img.freepik.com/foto-gratis/adultos-jovenes-que-tienen-fiesta-casa_23-2149215860.jpg?w=900&t=st=1678636720~exp=1678637320~hmac=8a6b4ca0de74fec650ad9a9470372ac0e0dd37eca33581da0441db17120e459a",
        "https://img.freepik.com/foto-gratis/amigos-tiro-medio-bebida_23-2149592917.jpg?w=900&t=st=1678636728~exp=1678637328~hmac=229c6738f8f00e1b6548d10f51fa20d1297867746973692288ea55bca6242472",
        "https://img.freepik.com/foto-gratis/amigos-sonrientes-tiro-medio-tomando-selfie_23-2149537509.jpg?w=1060&t=st=1678636729~exp=1678637329~hmac=129f0dabbbe33e7c3153b7fae6e720dfe15bff0213a1c4b626e8e81049bfbb4c",
    ]

    return (
        <>
            <section className="carousel-section custom-section-height">
                <Row>
                    <Col className="carousel-container">
                        <Carousel>
                            {carouselImages.map((url, index) => (
                                <Carousel.Item key={index} className="carousel-item">
                                    <img
                                        src={url}
                                        alt={`Slide ${index}`}
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>

                        <div className="carousel-content">
                            <div className="carousel-content__box bg-black-opacity">
                                <h1 className="carousel-content__title">Welcome to Split Party</h1>
                                <hr />
                                <p className="carousel-content__subtitle">Create, enjoy and split</p>

                                <Link to="/events/create">
                                    <Button className="carousel-content__button" variant="dark">Create your event</Button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>

            <section className="about-section custom-section-height">
                <Container>
                    <Row>
                        <Col lg={4}>
                            <div >
                                <Image src='https://picsum.photos/250/150' alt="Testimonial 1" roundedCircle />
                                <p className="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <p className="testimonial-name">- John Doe</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div>
                                <h2>Acerca de nosotros</h2>
                                <p>Somos Split Party, una empresa dedicada a ayudarte a crear eventos increíbles con tus amigos y familiares. Nuestro objetivo es hacer que la planificación de eventos sea lo más fácil posible para ti, para que puedas disfrutar de tu tiempo con tus seres queridos.</p>
                                <p>Ofrecemos una amplia gama de herramientas y recursos para que puedas crear el evento perfecto, desde la planificación y organización hasta la gestión de invitados y la división de gastos.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div >
                                <Image src='https://picsum.photos/255/155' alt="Testimonial 2" roundedCircle />
                                <p className="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <p className="testimonial-name">- Jane Doe</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="testimonials-section greyscale custom-section-height">
                <Container>
                    <h2>Testimonials</h2>
                    <Row>
                        <Col lg={4}>
                            <div className="testimonial">
                                <Image src='https://picsum.photos/250/150' alt="Testimonial 1" roundedCircle />
                                <p className="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <p className="testimonial-name">- John Doe</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="testimonial">
                                <Image src='https://picsum.photos/255/155' alt="Testimonial 2" roundedCircle />
                                <p className="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <p className="testimonial-name">- Jane Doe</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="testimonial">
                                <Image src='https://picsum.photos/256/157' alt="Testimonial 2" roundedCircle />
                                <p className="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <p className="testimonial-name">- Jane Doe</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="contact-section custom-section-height">
                <Container>
                    <h2>Contact Us</h2>
                    <Row>
                        <Col lg={6}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel justo euismod, malesuada lectus vel, semper nisl. In vestibulum consequat nisi in consectetur. Etiam cursus vitae nibh a malesuada. Sed eget turpis leo. Nulla facilisi. Suspendisse et augue quis orci consectetur faucibus.</p>
                            <p>Nulla facilisi. Suspendisse et augue quis orci consectetur faucibus. Nullam vitae tincidunt mauris, sed malesuada mi. Aliquam ac ligula risus. In sed dolor nisi. Sed porta sapien id massa tincidunt sagittis. Nam suscipit dolor nunc, sed auctor felis finibus ac.</p>
                        </Col>
                        <Col lg={6}>
                            <form>
                                <Form.Group controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your name" />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email" />
                                </Form.Group>

                                <Form.Group controlId="formBasicMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
                                </Form.Group>

                                <Button variant="primary" type="submit">Submit</Button>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default HomePage
