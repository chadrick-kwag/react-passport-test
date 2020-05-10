import React from 'react'
import { render } from 'react-dom'
import './loginpage.css'


export default class LoginPage extends React.Component{

    constructor(props){
        super(props)
        this.state={
            email: "",
            password: ""
        }

        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(){

        console.log(this.state)

        fetch('/login', {
            method: 'POST',
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify({
                username: this.state.email,
                password: this.state.password
            })

        }).then(resp=> resp.json()).then(data=> console.log(data)).catch(err=>{
            console.log(err)
            alert('failed to login')
            
        })
    }

    render(){

        return(
            <div className="mainholder">
                <label>email</label>
                <input type="text" onChange={e=>this.setState({email : e.target.value})} value={this.state.email}/>

                <label>password</label>
                <input type="password" onChange={e=>this.setState({password: e.target.value})} value = {this.state.password}/>

                <button onClick={e=>this.onSubmit()}>submit</button>
            </div>
        )
    }
}