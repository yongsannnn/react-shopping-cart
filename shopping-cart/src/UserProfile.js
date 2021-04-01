import React, { useState, useEffect } from "react"
import config from "./config"
import axios from "axios"


export default function UserProfile() {
    const [profile, setProfile] = useState([])
    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get(config.baseUrl + "/api/users/profile", {
                "headers": {
                    "Authorization" : "Bearer " + localStorage.getItem("accessToken")
                }
            })
            console.log(response.data)
            // setProfile(response.data)
        }
        fetch()
    }, [])
    return (
        <React.Fragment>
            <h1>User Profile</h1>
            {profile}
        </React.Fragment>
    )
}