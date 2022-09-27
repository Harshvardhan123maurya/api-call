import React from "react";
import profile from "./profile";
const Users = (props) => {
    return (
        <div className="container" style={userStyle}>
            {props.userData.map(user => (
                <profile userData={user}/>
            ))}
        </div>
    )
}

export default profile;

