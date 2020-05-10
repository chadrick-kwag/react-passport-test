import React from 'react'
import Auth from './Auth'


export default class HomePage extends React.Component{


    render(){

        console.log('inside homepage render')
        console.log(Auth.isAuthenticated)

        return(
            <div>
                this is homepage.

                {Auth.isAuthenticated ? <div>authenticated</div> : null}
            </div>
        )
    }
}