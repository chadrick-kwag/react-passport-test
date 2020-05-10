import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import HomePage from './homepage'
import LoginPage from './LoginPage/LoginPage.js'

class App extends React.Component {

    render() {
        return (

            <BrowserRouter>

                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/login'>Login</Link>
                            </li>
                            <li>
                                <Link to='/signup'>SignUp</Link>

                            </li>
                        </ul>
                    </nav>
                </div>


                <Switch>

                    <Route path='/login'>
                        <LoginPage/>
                    </Route>
                    <Route path='/'>
                        <HomePage />
                    </Route>
                </Switch>

                

            </BrowserRouter>


        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'))