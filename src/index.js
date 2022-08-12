import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));


//render app
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);