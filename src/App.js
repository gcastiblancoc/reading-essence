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
import './SignIn.css';

import PrimeraApp from './PrimeraApp';
import Register from './Register';
import SignIn from './SignIn';

//import Register from './Register';

function App() {
    
    const adminUser = {
        username: "gabriel",
        password: "castiblanco"
    }
    const [user, setUser] = useState({username: ""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);
        if(details.username == adminUser.username && details.password ==adminUser.password){
            console.log("Logged in");
            setUser({
                name: details.username
            });
        }
        else {
            console.log("Details do not match");
            setError("Details do not match");
        }
    }

    

    const Logout = () => {
        setUser({ username: ""})
    }
    

    const [currentForm, setCurrentFrom] = useState('primeraApp');
    
    /*const toggleForm = (formName) => {
        setCurrentForm(formName);
    }*/

    return (
        <div className='App'>
            {(user.username != "") ? (
                <div>
                    <h2>Welcome, <span></span>{user.name}</h2> 
                    <button onClick={Logout} >Logout</button>
                </div>      
            ) : (
                <SignIn Login={Login} error={error} />
            )}
        </div>

        
            //currentForm == "PrimeraApp" ? <PrimeraApp  />: <Register  />
            /*
            <Routes>
              <Route path="/login" element={<PrimeraApp />} />
              <Route path="/register" element={<Register />} />
            </Routes>
            */

            //<primeraApp Login={Login} error={error} />      
        
    )
}

export default App;