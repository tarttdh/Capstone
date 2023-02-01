import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';

function Login() {

    const [user, setUser]=useState({
        username:'',
        password1: ''
    }) 
    const {username, password1} = user
    
    const loginChange=(e)=>setUser({
        ...user,
        [e.target.name]:e.target.value 
    }) 

    return(

        <div>
            <Container>
            <h2 >Login</h2>
            <div className='row'>
                <div className='col-md-8 mx-auto'>
                    <form>
                        <div className='form-group mb-3'>
                            <label>username</label>
                            <input type='text'
                            className='form-control'
                            name='username'
                            value={username}
                            onChange={(e)=>loginChange()} 
                            />
                        </div>
                        <div className='form-group mb-3'>
                            <label>password</label>
                            <input type='text'
                            className='form-control'
                            name='password1'
                            value={password1}
                            onChange={(e)=>loginChange(e)} 
                            />
                        </div>
                    <button type='submit' className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
            </Container>
        </div>


    )
}

export default Login