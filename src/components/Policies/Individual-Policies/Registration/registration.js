import React from 'react';
import { Container } from "react-bootstrap";
import './registration.css';

const Registration = () => {
    return (
        <Container className="registration">
            <p>If you are ready to sign up, please follow the link below to a Google Form to register today:</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeJCFa6AKyJFnEfAsNFFj8DgkhDfAU2daiFGNhFt26AUuvo0A/viewform?vc=0&c=0&w=1&flr=0&gxids=7628">Click Here To Register</a>
        </Container>
    )
}

export default Registration;
