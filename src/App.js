import React, { useState } from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Routes,
    useNavigate,
  } from "react-router-dom";
import './login.css';
import './Register.css';

import PrimeraApp from './PrimeraApp';
import Register from './Register';
//import Register from './Register';

function App() {
    //const [currentForm, setCurrentFrom] = useState('primeraApp');
    
    /*const toggleForm = (formName) => {
        setCurrentForm(formName);
    }*/

    return (
        <div className='App'>
        {
            //currentForm == "PrimeraApp" ? <PrimeraApp  /> : <Real />
            <Routes>
              <Route path="/login" element={<PrimeraApp />} />
              <Route path="/register" element={<Register />} />
            </Routes>
        }
            
        </div>
    )
}

export default App;