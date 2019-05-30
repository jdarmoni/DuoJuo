import React from 'react'
import Greeting from './greeting/greeting'
import { Route, Switch, Link } from 'react-router-dom'
// import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
    return (
        <div className="container-splash">
            <Greeting />
        </div>
    )
}

export default App