import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import RegisterContainer from './register/register_container';
import { Route, Switch, Link } from 'react-router-dom';
import WelcomeContainer from './welcome/welcome_container';
import LessonContainer from './lessons/lesson_container';
import CoursesContainer from './courses/courses_container';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
    return (
        <>
        <div className="container-splash">
            <Route exact path ="/" component={GreetingContainer} />
        </div>
        <Route exact path="/register" component={RegisterContainer} />
        <Route exact path="/welcome" component={WelcomeContainer} />
        <Route path="/skill/" component={LessonContainer} />
        <Route path="/courses" component={CoursesContainer} />
    </>
    )
}

export default App