import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import MainRoutes from './MainRoutes'


export default function DashboardRoute() {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={ LoginPage } />
                <Route exact path="/register" component={ RegisterPage } />
                <Route path="/" component={ MainRoutes } />

                <Redirect to="/login" /> 
            </Switch>
        </Router>
    )
}
