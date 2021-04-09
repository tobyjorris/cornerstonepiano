import React from 'react';
import { Container, Row } from "react-bootstrap";
import './tools.css';

const Tools = () => {
    return (
        <Container>
            <h3>Piano, Tools & Music</h3>
            <Row className="tools-body">
                <p>
                    I strongly recommend a real piano rather than a keyboard.
                    <a href="https://www.jimlaabsmusicstore.com/" target="_blank" rel="noopener noreferrer"> Jim Laabs Piano </a>
                    offers affordable lease/buy options. I’ve had several families
                    lease with options to buy and all have had good experiences. Let them know I
                    sent you! Other options include <a href="https://www.schmittmusic.com/" target="_blank" rel="noopener noreferrer">Schmitt Music</a>
                    , ask for Sue Dopp. Online, a lot of pianos are for sale (some free!),
                    but I highly recommend you have a registered piano technician/tuner (about $50) inspect it first.
                </p>
                <p> <strong>Tune your piano</strong> each late fall (after your heating system has been running awhile), for good instrument maintenance and enjoyment of sound for all. Area registered piano technicians I recommend (let them know I referred them):
                </p>
                <ul>
                    <li>Bob Anderson, <a href="https://www.bobandersonpianotuning.com/" target="_blank" rel="noopener noreferrer">bobandersonpianotuning.com</a>  (612) 710-6816 (excellent, less expensive)</li>
                    <li>Terry Sipe, <a href="http://selectpianoworks.com/" target="_blank" rel="noopener noreferrer">selectpianoworks.com</a>  (763) 262-6359 (a master, can do anything)</li>
                </ul>
                <p>Music: Please plan to budget up to $150 per year for music. I will be sending out emailed music lists with links to purchase directly from <a href="https://www.sheetmusicplus.com/" target="_blank" rel="noopener noreferrer">sheetmusicplus.com</a>. Please read instructions carefully and order books as soon as you receive the lists. Call me if you need help. Music can also be purchased from Schmitt Music, Prima Music, JWPepper, other online suppliers, etc.
                </p>
                <ul>
                    <li><a href="https://www.schmittmusic.com/" target="_blank" rel="noopener noreferrer">Schmitt Music Stores</a> (closest location: 108 E Main St, Anoka  763-421-1062)</li>
                </ul>
                <p>Metronome – This is the musician’s best friend and it is required for all students. I like the <a href="https://www.amazon.com/SEIKO-SQ50V-SQ50-V-Quartz-Metronome/dp/B000LFCXL8/ref=sr_1_3?crid=6F36ALFPY117&dchild=1&keywords=seiko+sq50-v+quartz+metronome&qid=1613407745&sprefix=seiko+sq50-v%2Caps%2C169&sr=8-3" target="_blank" rel="noopener noreferrer">Seiko SQ50-V Quartz</a> because it has a nice sound and is quick and easy to use. You can also find free metronome apps that work too, if student has ready access to a device.</p>
            </Row>

        </Container>
    )
}

export default Tools;
