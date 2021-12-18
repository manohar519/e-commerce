import React from "react"
import { Link } from "react-router-dom";

import Header from "./Header";

const Login = () => {
    return (
        <div>
            <Header />
            <h1>Login</h1>
            <input type="text" placeholder="enter username"></input>
            <br></br>
            <input type="text" placeholder="enter password"></input>
            <br></br>
            <Link to="/product"><button>Login</button></Link>
        </div>
    )
}
export default Login