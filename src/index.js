import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from './Components/Layout/NavBar';
import Page from './Components/Layout/Page';
import Footer from './Components/Layout/Footer';

import './styles/styles.scss';
import './styles/app.scss';

const loader = document.querySelector('.loader');
const showLoader = () => loader.classList.remove('loader--hide');
const hideLoader = () => loader.classList.add('loader--hide');

const App = ({ hideLoader }) => {
    useEffect(hideLoader, []);

    return (
        <div className='app'>
            <Navbar />
            <Page />
            <Footer />
        </div>
    );
};

setTimeout(() =>
    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <CssBaseline />
                <App
                    hideLoader={hideLoader}
                    showLoader={showLoader} />
            </Router>
        </React.StrictMode>,
        document.getElementById('root')
    )
    , 1000);
