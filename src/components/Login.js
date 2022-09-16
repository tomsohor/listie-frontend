import React from 'react';

function Login() {
    return ( 

        <div className="login">
            <p className="tag">
                Log in
            </p>
            <div className="content">
                <h2>“ Listie, Your bestie to Reminisce your Products pricing! “ </h2>
                <div className="form">
                    <input type="text" className="username" placeholder='username'/>
                    <input type="text" className="password" placeholder='Password'/>
                    <div className="action">
                        <p>Don’t have Account? <a href=""> Create</a> Create</p>
                        <button className="loginbtn">Login</button>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Login;