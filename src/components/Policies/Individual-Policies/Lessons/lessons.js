import React from 'react';
import { Container } from "react-bootstrap";
import './lessons.css';

const Lessons = () => {

    return (
        <Container >
            <h3>Lesson Day Procedure</h3>
            <ul className="lesson-policy">
                <li className="lesson-li">
                    <strong>Park in the street, not on our lawn or driveway please.</strong>
                </li>
                <li  className="lesson-li">
                    It is best to arrive 2-5 minutes early, (but no earlier). Please just walk
                    in as another lesson may be in progress and I cannot come to  the door. Hang
                    coat and set shoes <strong>behind </strong>the door, <strong>wash hands with soap and water</strong>
                    , dry with a paper towel. Get your music books out and open to current pages. You may
                    sit quietly at the kitchen table if I am finishing another lesson.
                </li>
                <li  className="lesson-li">
                    Each student needs to have their own music book bag solely designated for their music.
                </li>
                <li  className="lesson-li">
                    <strong>Make sure fingernails are trimmed short EVERY SINGLE WEEK</strong>
                    . Even moderately long nails make good hand position at the piano impossible.
                </li>
                <li className="lesson-li">Parents are welcome to quietly observe any of the lessons, any time. It is also
                    okay to drop the student off. For students 9 and under, parents generally need to
                    observe the lesson closely in order to assist at home.
                </li>
                <li className="lesson-li">
                    If siblings need to be in attendance with parents, please have them silently occupy themselves at the dining room table.
                </li>
                <li className="lesson-li">
                    Please no eating or drinking.  A water bottle is fine.
                </li>
            </ul>
        </Container>
    )
}

export default Lessons;
