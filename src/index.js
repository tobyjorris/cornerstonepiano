import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";

ReactDOM.render(
    <GoogleReCaptchaProvider
        useRecaptchaNet
        reCaptchaKey={process.env.REACT_APP_RECAPTCHA_KEY}
        scriptProps={{ async: true, defer: true, appendTo: 'body'}}
    >
        <App />
    </GoogleReCaptchaProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
