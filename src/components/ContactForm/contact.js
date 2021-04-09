import React, { useState, useCallback } from 'react';
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import CheckFormValidity from '../../utils/checkFormValidity';
import TestCaptchaToken from '../../utils/testCaptchaToken';
import './contact.css';
import {
    GoogleReCaptcha,
    useGoogleReCaptcha
} from 'react-google-recaptcha-v3';

import './contact.css'

const NameForm = () => {
    const [token, setToken] = useState('');
    const [show, setShow] = useState(false);
    const [formErrors, setFormErrors] = useState([])
    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        phone: '',
        contactMethod: '',
        referralSource: '',
    })
    const { executeRecaptcha } = useGoogleReCaptcha();

    const handleReCaptchaVerify = useCallback(
        token => {
            setToken(token);
        },
        [setToken]
    );

    const handleChange = (event) => {
        setContactInfo({
           ...contactInfo,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const manuallyRetrieveToken = executeRecaptcha();
        const errors = CheckFormValidity(contactInfo);
        if (errors.length > 0) {
            setFormErrors(errors)
        } else {
            manuallyRetrieveToken.then(token => {
                TestCaptchaToken(token, contactInfo).then(result => {
                    if (result.message) {
                        handleShowModal();
                        console.log('success message', result.message)
                    } else if (result.error) {
                        console.log(result.error)
                    }
                })
            })
            resetForm();
        }
    }

    const resetForm = () => {
        setContactInfo({name: '', email: '', phone: '', contactMethod: '', referralSource: ''} )
    }

    const handleCloseModal = () => setShow(false);
    const handleShowModal = () => setShow(true);

    return (
        <Container className="contactBackground" name="contact" fluid>
            <Container className="contactForm">
                <Row>
                    <Col lg="4" className="align-self-center flex-column contactText">
                        <h2>Contact Me</h2>
                        <p>Please enter your contact information. I will respond to you as soon as possible.</p>
                    </Col>
                    <Col lg="8" className="align-self-center flex-column">
                        <Form className="form" onSubmit={handleSubmit}>
                            <Form.Row>
                                <Col xs="12" sm="4">
                                    <Form.Group controlId="formGridName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Name..." name="name" onChange={handleChange}/>
                                        {formErrors.some(error => error.field === 'name') ? <div className="error-message">{formErrors.find(error => error.field === 'name').message}</div> : null}
                                    </Form.Group>
                                </Col>
                                <Col  xs="12" sm="4">
                                    <Form.Group controlId="formGridNumber">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control type="tel" placeholder="Enter Phone Number..." name="phone" onChange={handleChange}/>
                                        {formErrors.some(error => error.field === 'phone') ? <div className="error-message">{formErrors.find(error => error.field === 'phone').message}</div> : null}
                                    </Form.Group>
                                </Col>
                                <Col  xs="12" sm="4">
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email..." name="email" onChange={handleChange}/>
                                        {formErrors.some(error => error.field === 'email') ? <div className="error-message">{formErrors.find(error => error.field === 'email').message}</div> : null}
                                    </Form.Group>
                                </Col>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridExperience">
                                    <Form.Label>Preferred Method of Contact</Form.Label>
                                    <Form.Control as="select" defaultValue="Choose..." name="contactMethod" onChange={handleChange}>
                                        <option value="">Choose...</option>
                                        <option value="Email">Email</option>
                                        <option value="Phone Call">Phone Call</option>
                                        <option value="Text Message">Text Message</option>
                                    </Form.Control>
                                    {formErrors.some(error => error.field === 'contactMethod') ? <div className="error-message">{formErrors.find(error => error.field === 'contactMethod').message}</div> : null}
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridSource">
                                    <Form.Label>How Did You Hear About Us?</Form.Label>
                                    <Form.Control as="select" defaultValue="Choose..." name="referralSource" onChange={handleChange}>
                                        <option value="">Choose...</option>
                                        <option value="Google">Google</option>
                                        <option value="NextDoor">NextDoor</option>
                                        <option value="Referral">Referral</option>
                                        <option value="Other">Other</option>
                                    </Form.Control>
                                    {formErrors.some(error => error.field === 'referralSource') ? <div className="error-message">{formErrors.find(error => error.field === 'referralSource').message}</div> : null}
                                </Form.Group>
                            </Form.Row>
                            <Button variant="light" type="submit">
                                Submit
                            </Button>
                            <Modal show={show} onHide={handleCloseModal} aria-labelledby="contained-modal-title-center" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Thank You</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>You've successfully submitted your contact information</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleCloseModal}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Form>
                        <GoogleReCaptcha
                            onVerify={handleReCaptchaVerify}
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default NameForm;
