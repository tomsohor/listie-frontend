import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';

function Login() {
    const [uname,setUname] = useState(''); 
    const [pwd,setPwd] = useState(''); 
    const navigate = useNavigate();

    const onLogin = async(e) =>{
        e.preventDefault();
        await api.postLogin({username:uname,password:pwd}).then(res=>{
            console.log(res)
            if(res.status===200){
                navigate('/')
            }
            
        })
    }
    return ( 

        <div className="login">
                <h2>“ Listie, Your bestie to Reminisce your Products pricing! “ </h2>
                <form className="form">
                    <input type="text" className="username" placeholder='username' onChange={event => setUname(event.target.value)}/>
                    <input type="password" className="password" placeholder='Password' onChange={event => setPwd(event.target.value)}/>
                    <div className="action">
                        <p>Don’t have Account? <a href=""> Create</a></p>
                        <button className="loginbtn" onClick={onLogin}>Login</button>
                    </div>
              
            </form>
        </div>
     );
}

export default Login;