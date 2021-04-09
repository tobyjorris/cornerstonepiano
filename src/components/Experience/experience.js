import React from 'react';
import './experience.css';
import { Container, Row, Col} from "react-bootstrap";

const experience = () => {
    return(
        <Container className="experience_background" name="experience" fluid>
            <Container className="experience">
                {/*<Row  className="experience_header">
                    <Col>
                        <h2>Levels of Experience</h2>
                    </Col>
                </Row> */}
                <Row className="experience_row">
                    <Col sm="12" lg="4" className="box-col">
                        <div className="experience_box">
                            <h2 className="experience_title">A Snapshot of a Lesson</h2>
                            <hr className="experience-hr"/>
                            <div className="experience_body">
                                <p>During lessons, I work use proven strategies to develop these skills in each student:</p>
                                <ul>
                                    <li>Dexterity of fingers, wrists, and arms</li>
                                    <li>Fluidity, accuracy and speed of movement</li>
                                    <li>A firm grasp and appreciation for musical style and artistry</li>
                                    <li>A understanding of musical theory and notation</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col sm="12" lg="4" className="box-col">
                        <div className="experience_box">
                            <h2 className="experience_title">Piano Performance</h2>
                            <hr className="experience-hr"/>
                            <div className="experience_body">
                                <p>While I don't participate in contests or exams, nothing helps
                                    a student advance in ability like preparing for a scheduled
                                    performance. I schedule two to three student recitals throughout
                                    the year so students gain the ability to focus, form habits of
                                    discipline, and build an important life skill in being able to
                                    appear before an audience. Students also grow in confidence when
                                    they are required to work toward a goal, and they can find joy in
                                    sharing their achievements with others. All recitals are optional.</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm="12" lg="4" className="box-col">
                        <div className="experience_box">
                            <h2 className="experience_title">Getting Started</h2>
                            <hr className="experience-hr"/>
                            <div className="experience_body">
                                <p>I offer a free, one hour get-to-know-you session to anyone considering piano
                                    instruction. This time will give us the opportunity to get acquainted, discuss
                                    any questions you may have, learn about my teaching style, and schedule
                                    future lessons if you are interested. In this meet and greet, we take apart my
                                    grand piano so students can see how it works.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>

    )
}

export default experience;
