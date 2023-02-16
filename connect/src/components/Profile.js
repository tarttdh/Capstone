import React, { useEffect } from 'react';
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import Button from 'react-bootstrap/esm/Button';
import jwt_decode from "jwt-decode";


const Profile = () => {
  let {result, user, setUser, setAuthTokens}=useContext(AuthContext);

    fetch("http://127.0.0.1:8000/notes/?format=json", {
      method:"GET",
      headers:{
          "Content-Type":"application/json"
      }
      
  })
    .then (response => response.json() )
    .then(result => {
        console.log('result: ' , result)
        console.log('id: ', user.id)
      
    })
  
    const handleLogout = () => {
        localStorage.clear();
        setUser({});
        setAuthTokens({});
     };
     

  return (
    <div>
        {user?
        <p>Welcome {user?.username}</p> : <p>Must Login</p>}     
       

    <Button onClick={handleLogout}> Logout</Button>
    </div>
  )
}

export default Profile

