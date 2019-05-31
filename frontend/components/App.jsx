import React from 'react'
import GreetingContainer from './greeting/greeting_container'
import { Route, Switch, Link } from 'react-router-dom'
// import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
    return (
        <div className="container-splash">
            <GreetingContainer />
        </div>
    )
}

export default App