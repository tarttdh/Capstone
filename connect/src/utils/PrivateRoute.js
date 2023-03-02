import { Route, Link } from 'react-router-dom'
import { useContext } from 'react'
import {AuthContext} from '../context/AuthContext'

export const PrivateRoute = ({children, ...rest}) => {
    let {user} = useContext(AuthContext)
    return(
        <Route {...rest}>{!user ? <Link to="/login" /> :   children}</Route>
    )
}



export default PrivateRoute