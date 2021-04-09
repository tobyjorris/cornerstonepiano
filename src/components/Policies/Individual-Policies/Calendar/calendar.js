import React from 'react';
import { Container, Button } from "react-bootstrap";
import './calendar.css';

const Calendar = () => {
    return (
        <Container>
            <h3>Calendar 2020-2021</h3>
            <ol>
                <li className="calendar-item"><strong>September 14, 2020 – May 25, 2021:</strong> School Year Session
                    <ol>
                        <li className="calendar-item">
                            <strong>Friday, Nov. 13, 2020, 6:30-7:30: </strong>
                            Student mini-recital, in my living room
                        </li>
                        <li className="calendar-item">
                            <strong>Nov 23-27, 2020: </strong>
                            No lessons Thanksgiving week
                        </li>
                        <li className="calendar-item">
                            <strong>Friday, Dec 18, 2020, 6:30: </strong>
                            Small Candlelight Christmas Ensemble/Mini-Recital & Party, in my living room.
                        </li>
                        <li className="calendar-item">
                            <strong>Dec 21, 2020 – January 13, 2021: </strong>
                            Christmas and Winter Break, no lessons.
                        </li>
                        <li className="calendar-item">
                            <strong>Jan 18, 2021: </strong>
                            Lessons Resume
                        </li>
                        <li className="calendar-item">
                            <strong>February 15-17, 2021: </strong>
                            No Lessons
                        </li>
                        <li className="calendar-item">
                            <strong>March 15–26, 2021: </strong>
                            Spring Break, no lessons.
                        </li>
                        <li className="calendar-item">
                            <strong>March 29, 2021: </strong>
                            Lessons Resume
                        </li>
                        <li className="calendar-item">
                            <strong>Sunday, May 16th, 2021, Our Formal Recital, 3:30: </strong>
                            <p>(Students be ready at 3:15): Schmitt Music, 2400 Freeway Blvd, Brooklyn Center 55430 (Recital Room).
                            You may invite all the guests you’d like! At this recital we dress sharply. Note that Schmitt allows
                            no food or drink, (but it could be a good time for gift music purchases.)</p>
                        </li>
                    </ol>
                </li>
            </ol>
            <Button className="calendar-print" >Print Calendar</Button>
        </Container>
    )
}

export default Calendar;
