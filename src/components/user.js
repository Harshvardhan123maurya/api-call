import React from "react";
import UserItem from "./UserItem";
import Loader from "../layouts/Loader";
const Users = (props) => {
    if(props.loading){
        return (
    

            <Loader />
        )
    }
    return (
        <div className="container" style={userStyle}>
        <div className="" style={userStyle}/>
            {props.userData.map(user => (
                <UserItem userData={user} />
                <UserItem userData={user}key={user.id}/>
            ))}
            </div>