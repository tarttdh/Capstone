import {AuthContext} from '../context/AuthContext'
import React, {useState, useContext, useEffect} from "react";
import jwt_decode from "jwt-decode";
import {useNavigate} from 'react-router-dom';


 export const Login = () => {
    let navigate = useNavigate();
    let {user, setAuthTokens, setUser}=useContext(AuthContext);
    const [username, setName] = useState('');
    const [password, setPassword] = useState('');


    let loginUser = async (e )=> {
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/api/token/', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'username':username, 'password':password})
        })
        let data = await response.json()

        if(response.status === 200){
            console.log(data)
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            navigate('/Profile')
        }else{
            alert('Something went wrong!')
        }
    }

    return(
     <main className="form-signin">
        <form onSubmit={loginUser}>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
            <input className="form-control" placeholder="Username"
                       onChange={e => setName(e.target.value)}
                />
                <label htmlFor="floatingInput">username</label>
            </div>

            <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                       onChange={e => setPassword(e.target.value)}
                />
                <label htmlFor="floatingPassword">Password</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
    </main>
    )
}
