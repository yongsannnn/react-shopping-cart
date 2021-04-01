import React from "react"
import { useState } from "react"
import axios from "axios"
import config from "./config"

const baseUrl = config.baseUrl

export default function LoginComponent() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    return (
        <React.Fragment>
            <label>Email</label>
            <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <label>Password</label>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button onClick={
                async ()=> {
                    const response = await axios.post(baseUrl + "/api/users/login", {
                        "email": email,
                        "password": password
                    })
                    // console.log(response.data)
                    localStorage.setItem("accessToken", response.data.accessToken)
                    localStorage.setItem("refreshToken", response.data.refreshToken)
                    console.log(localStorage)
                }
            }>Log In</button>
        </React.Fragment>
    );
}

