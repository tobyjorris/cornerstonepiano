import React from "react";
import Toolbar from "../Navbar/Navbar";
import { Jumbotron } from "react-bootstrap";
import bgimage from '../../assets/pianokeys.jpg';
import './header.css';

const header = () => {
    return (
        <Jumbotron style={{background: `url(${bgimage}) center center`}} className="jumbotron">
            <Toolbar className="toolbar"/>
            <h1 className='title_text'>Cornerstone Piano School</h1>
        </Jumbotron>
    )
}

export default header;
