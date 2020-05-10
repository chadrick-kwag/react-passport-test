import {Route,Redirect} from 'react-router-dom'
import Auth from './Auth'

function PrivateRoute({children, ...rest}){
    return(
        <Route {...rest} render = {({location})=>{
            Auth.isAuthenticated ? children :  <Redirect to={{pathname: "/login", state: {from: location}}}/>
        }} />
    )
}

export default PrivateRoute