import React from 'react'
import GreetingContainer from './greeting/greeting_container'
import RegisterContainer from './register/register_container'
import { Route, Switch, Link } from 'react-router-dom'
// import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
    return (
        <>
        <div className="container-splash">
            <GreetingContainer />
        </div>
        <Route exact path="/register" component={RegisterContainer} />
    </>
    )
}

export default App