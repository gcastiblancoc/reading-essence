import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PrimeraApp from './PrimeraApp';
import Register from './Register';
import './login.css';
import { BrowserRouter } from 'react-router-dom';


/*const divRoot = document.querySelector('#root');*/

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>
);


/*ReactDOM.render(<App /> , divRoot);*/

