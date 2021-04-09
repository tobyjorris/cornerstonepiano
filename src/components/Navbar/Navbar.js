import React, {Component} from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-scroll'
import './Navbar.css';

class toolbar extends Component {
    render() {
        return (
            <Navbar className="navbar" collapseOnSelect expand="md" fixed="top" >
                <Navbar.Brand id="brand_text" href="/">Cornerstone Piano School</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="mr-auto">
                        <Link className="link" to="about" spy={true} offset={-100} delay={0} smooth={false} duration={200} >About</Link>
                        <Link className="link" to="experience" spy={true} offset={-100} delay={0} smooth={false} duration={200} >Experience Levels</Link>
                        <Link className="link" to="testimonials" spy={true} offset={-100} delay={0} smooth={false} duration={200} >Testimonials</Link>
                    </Nav>
                    <Nav>
                        <Link className="link" to="contact" spy={true} smooth={false} duration={200}>Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default toolbar;
