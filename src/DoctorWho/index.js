import React, {Component} from "react";
import {Provider} from 'react-redux';
import store from "./store";
import {HashRouter} from 'react-router-dom';
import App from "./components/App/App";
import './index.css';

const DoctorWhoApp = () => {

    return(
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    )
}

export default DoctorWhoApp;