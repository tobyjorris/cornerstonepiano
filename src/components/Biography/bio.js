import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import BioPic from '../../assets/bio_picture.jpg'
import './bio.css'

const Biography = () => {
    return(
        <Container className="biography_background" fluid>
            <Container name="about" className="biography">
                <Row>
                    <Col lg="4" className="align-self-center">
                        <Image id="bio_picture" style={{width: '300px'}} src={BioPic} alt='Piano Picture' />
                    </Col>
                    <Col lg="8" className="align-self-center">
                        <h1>Meet The Teacher</h1>
                        <p>My name is Connie, and I welcome you to Cornerstone Piano School. I have enjoyed playing piano since early childhood and I have turned that <strong>interest</strong> into teaching for the past 25 years. My goal in piano instruction is to instill a lifelong enthusiasm for playing music while stressing both technical skill and musical expression using a classical approach and modeling.
                        </p>
                        <p>
                            It is my goal that, regardless of what brings a student to piano lessons, each has fun with the experience and leaves with a new appreciation for music. From the beginning, I work with students and their families to establish attainable goals to help focus the instruction. I tailor the lessons to each student's goals and abilities to ensure they have the most positive, enjoyable experience while gaining essential skills that wil support them throughout life. Students are consistently challenged to aim  high but never forced to excel beyond their own interests or desires.
                        </p>
                        <p>I welcome students ages 8 - adult and teach beginner through early-advanced levels. I teach out of my home in Andover, just north of Round Lake.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Biography;


// 151.101.1.195
// 151.101.65.195
