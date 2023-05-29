import React, { useState } from 'react';
import './SignIn.css';


function SignIn({ Login, error }) {
    const[details, setDetails] = useState({username: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

  return (
    <div>
        <form onSubmit={submitHandler} >
            <div className='form-inner'>
                <h2>
                    reading
                    <br  />
                    essence
                </h2>
                {(error != "") ? (<div className='"error' > {error} </div>) : ""}
                <div className='form-group1'>    
                    <input type="text" name='username' id='username' onChange={e => setDetails({...details, username: e.target.value})} value={details.username} placeholder='      Username' />
                </div>
                <div className='form-group2'>
                    <input type="password" name='password' id='password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password} placeholder='      Password'/>
                </div>
                <input type='submit' value='SignIn' className='button' />
                <div className='you-don-t-have-an-account-signup'>
                        You don't have an account yet? Sign Up
                </div>
            </div>
        </form>

    </div>
  )
}

export default SignIn