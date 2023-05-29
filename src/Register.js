import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';

/*
const Register = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

}
*/


function Register() {
    const [createUserData, setCreateUserData] = useState({
        id: "",
        name: "",
        nickname: "",
        email: "",
        password: "",
        role: "",
      }); 

    const handleCreateUserSubmit = (e) => {
        e.preventDefault();
    
        // Send create user request
        fetch("http://localhost:8080/user/insert", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(createUserData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Create User Response:", data);
            // Handle the response data as needed
          })
          .catch((error) => {
            console.error("Error creating user:", error);
          });
    }; 
    const navigate = useNavigate();
    return (

        <div className='registerPage'>
            <div className="formContainer">
                <h2>Welcome to Reading Essence</h2>
                <form onSubmit={handleCreateUserSubmit}>

                    <div className="formGroup">
                        <label htmlFor="createUserId">ID</label>
                        <input
                             type="text"
                            id="createUserId"
                            value={createUserData.id}
                            onChange={(e) =>
                                setCreateUserData({ ...createUserData, id: e.target.value })
                        }
                        />
                    </div>

                    <div className="formGroup">
                        <label htmlFor="createUserName">Name</label>
                        <input
                            type="text"
                            id="createUserName"
                            value={createUserData.name}
                            onChange={(e) =>
                                setCreateUserData({ ...createUserData, name: e.target.value })
                            }
                        />
                    </div>

                    <div className="formGroup">
                        <label htmlFor="createUserNickname">Username</label>
                        <input
                            type="text"
                            id="createUserNickname"
                            value={createUserData.nickname}
                            onChange={(e) =>
                                setCreateUserData({ ...createUserData, nickname: e.target.value })
                            }
                        />
                    </div>

                    <div className="formGroup">
                        <label htmlFor="createUserEmail">Email</label>
                        <input
                            type="email"
                            id="createUserEmail"
                            value={createUserData.email}
                            onChange={(e) =>
                                setCreateUserData({ ...createUserData, email: e.target.value })
                            }
                        />
                    </div>

                    <div className="formGroup">
                        <label htmlFor="createUserPassword">Password</label>
                        <input
                            type="password"
                            id="createUserPassword"
                            value={createUserData.password}
                            onChange={(e) =>
                                setCreateUserData({ ...createUserData, password: e.target.value })
                            }
                        />
                    </div>

                    <div className="formGroup">
                        <label htmlFor="createUserRole">Role</label>
                        <input
                            type="text"
                            id="createUserRole"
                            value={createUserData.role}
                            onChange={(e) =>
                                setCreateUserData({ ...createUserData, role: e.target.value })
                            }
                        />
                    </div>

                    <button type="submit">Sign Up</button>
                </form>
            </div>
            <button onClick={() => navigate('login')}>Already have an account? Sign In</button>
        </div>
    )
}


export default Register;