import React, { useEffect } from 'react';
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import Button from 'react-bootstrap/esm/Button';


const Profile = () => {
    
    let {user, setUser, setAuthTokens}=useContext(AuthContext);

    useEffect(()=>{
        console.log(user)
    },[])

    const handleLogout = () => {
        localStorage.clear();
        setUser({});
        setAuthTokens({});
     }
  return (
    <div>
        {user?
        <p>Welcome {user?.username}</p> : <p>Must Login</p>}
    <Button onClick={handleLogout}> Logout</Button>
    </div>
  )
}

export default Profile

