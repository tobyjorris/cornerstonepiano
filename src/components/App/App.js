import React, {Component} from 'react';
import './App.css';
import Header from '../Header/header';
import Biography from '../Biography/bio'
import Experience from '../Experience/experience'
import Testimonial from '../Testimonial/testimonial'
import Footer from '../Footer/footer'
import NameForm from "../ContactForm/contact";
import Policies from "../Policies/policies";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Biography />
                <Experience />
                <Testimonial />
                <Policies />
                <NameForm />
                <Footer />
            </div>
        );
    }
}

export default App;
