import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import '@fortawesome/fontawesome-free/css/all.min.css'
import GlobalProvider from './context/GlobalState';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <GlobalProvider>
    <App />
    </GlobalProvider>
    
 
);



