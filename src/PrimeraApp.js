import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link, 
    useNavigate
} from 'react-router-dom';
import './login.css';

//ESTA ES LA PAGINA DE LOGIN


const PrimeraApp = () => {
    //const [details, setDetails] = useState({username: "", password: ""});
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
/*
    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }
*/
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
    }

  
    const navigate = useNavigate();

    
        return (
            <div className="login-screen-desktop">
                <div className="div">
                    <h1 className="reading essence">
                        reading
                        <br  />
                        essence
                    </h1>
                    <div className="overlap">
                        <div onSubmit={handleSubmit} className='username'>
                            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Username' className='uname' id='username' name='username'/>
                        </div>
                    </div>
                    <div className="overlap2">
                        <div onSubmit={handleSubmit} className='e'>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' className='pword' id='password' name='password'/>
                        </div>
                    </div>
                    <div className="overlap3">
                        <div className="rectangle" />
                        <div className="g">Sign In</div>
                    </div>
                    <div className='su'>
                        <button onClick={() => navigate('register')}>Don't have an account yet? Sign up</button>
                    </div>       
                    <div className='you-don-t-have-an-account-signup'>
                        <div className='span1'>You don't have an account?</div>
                        <div className='span2'>&nbsp;</div>
                        <div className='span3'>SingUp</div>
                    </div>
                </div>
            </div>
        );
    
    }


export default PrimeraApp;