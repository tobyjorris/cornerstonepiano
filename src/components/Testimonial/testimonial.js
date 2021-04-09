import React from 'react';
import './testimonial.css';
import testimonialImg from '../../assets/testimonial.jpg'
import { Container, Row, Col } from "react-bootstrap";

const testimonial = () => {
    return(
        <Container className="testimonial_background" name="testimonials" style={{background: `url(${testimonialImg}) center`}} fluid>
            <Container className="testimonial">
                <Row>
                    <Col>
                        <h2 className="testimonial_title">Testimonials</h2>
                        <div className="testimonial_body">
                            <div className="single_testimonial">
                                <blockquote className="quote">
                                    "Connie is a patient, kind, and thoughtful teacher. She does a great job demonstrating new pieces and
                                    she is always so encouraging. Connie has a love of music that shines through every part of her. "</blockquote>
                                <cite>-Christine, mother of two students</cite>
                            </div>
                            <div className="single_testimonial">
                                <blockquote className="quote">
                                    "Connie is awesome. She has a great attitude and has been very patient in teaching me the piano. Connie
                                    has the ability to make one feel comfortable in their ability and is always challenging me to be better.
                                    I like that she is a professional and understands the steps it takes in becoming a good piano player"</blockquote>
                                <cite>-Rachel, adult student</cite>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default testimonial;
