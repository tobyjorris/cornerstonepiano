import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './fees.css';

const Fees = () => {
    return (
        <Container className="fees-container">
            <Row>
                <Col xs={12} md={3}>
                    <h4>Annual Registration</h4>
                </Col>
                <Col className="fee-detail">
                    <p>A non-refundable, Annual Registration Fee of $30.00 per family is due prior to the first lesson. This reserves your lesson spot for the year, covers administrative costs, recital costs, outside teacher time and various incidental costs.</p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={3}>
                    <h4>School Year Tuition Schedule</h4>
                </Col>
                <Col className="fee-detail">
                    <p>The school year runs September 14, 2020 – May 25, 2021 and includes 29, 45-minute, private piano lessons. The student is only billed for 27 lessons. This makes it possible for the student to cancel one lesson and the teacher to cancel one lesson. (If the student has perfect attendance, they will receive a free lesson).</p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={3}>
                    <h4>Total Tuition</h4>
                </Col>
                <Col className="fee-detail">
                    <p>Total Tuition for Sept - May is $1080. There are three payment options:</p>
                    <ul>
                        <li>Pay the one-time annual tuition of $1080 at your first September lesson; </li>
                        <li>Pay two semester payments of $540.00 each due first lesson in Sept and January;</li>
                        <li>9 equal payments of $120/month due at the first lesson of each month, Sept thru May.</li>
                    </ul>
                    <p><strong>Payments accepted:</strong> Cash or checks, payable to Connie Siirila.</p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={3}>
                    <h4>Late Fees</h4>
                </Col>
                <Col className="fee-detail">
                    <p>If paying monthly, Tuition is due no later than your 1st lesson day of the month.
                        If payment is not received by 8 PM on your 1st lesson day of the month, please
                        add a $10 late fee. If you will be absent on the first lesson day of the month,
                        the tuition payment is still due on time.</p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={3}>
                    <h4>Cancellation Policy</h4>
                </Col>
                <Col className="fee-detail">
                    <p>Missed lessons: The studio shall not assume any financial responsibility for a student’s absence(s). Annual tuition rates are flat fees and are not refunded. Your lesson time is reserved for you whether you participate or not.</p>
                    <p>Severe snowstorms: If lessons need to be canceled due to impassable roads, a makeup will be scheduled.</p>
                    <p>
                        Quitting midyear: I hope you don’t. I understand that learning new skills is not always easy. Please stay in communication with me if your student is experiencing difficulty or feeling overwhelmed. Many times, we can work together to find new music they love or adjust the practice schedule. If you still make the decision to quit mid-year for whatever reason, one month’s notice and one month’s courtesy payment is requested if dropping out before May 25, 2021.
                    </p>
                    <p>If I am unable to teach beyond my one allowable cancellation, refunds will be given.</p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={3}>
                    <h4>COVID 19 Policy</h4>
                </Col>
                <Col className="fee-detail">
                    <p>If any student or family member is diagnosed with COVID-19,
                        under required quarantine for exposure, or if the student is exhibiting symptoms,
                        please DO NOT come to your lesson. A Zoom lesson will be conducted instead.
                        I plan to teach lessons in person in my clean home, without a mask, regardless of
                        what the schools are doing, but I am also prepared to conduct Zoom lessons if necessary.
                        If we agree to a Zoom lesson, I will email a link at the start of the lesson.
                        Please have Zoom downloaded to your device, and if possible, please use a laptop or
                        pad so we can adequately see and hear each other during the lesson.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Fees;
