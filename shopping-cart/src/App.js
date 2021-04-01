import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
// import { useState } from "react"
// import axios from "axios"
import LoginComponent from "./LoginComponent"
// import { ProductListing } from "./ProductListing"
import UserProfile from "./UserProfile"

export default function App() {
    return (
        <div className="container">
            {/* <LoginComponent/> */}
            {/* <ProductListing/> */}
            <UserProfile/>
        </div>
    );
}

