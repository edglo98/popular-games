import React, { useEffect, useContext, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import MainRoutes from './MainRoutes'
import { firebase } from '../firebase'
import { UserContext } from '../context/UserContext'
import Spinner from '../components/Spinner';

export default function DashboardRoute() {
    const { setUser, user } = useContext(UserContext)
    const [ sessionLoad, setSessionLoad ] = useState(true)

    useEffect(()=>{
        firebase.auth().onAuthStateChanged(user => {
            if(user?.uid){
                setUser({logedin: true, ...user})
            }
            setSessionLoad(false)
        })
    },[ setUser ])

    if( sessionLoad ){
        return <Spinner />
    }

    return (
        <Router>
            <Switch>
                
                <Route exact path="/login" component={ user.logedin
                                                        ? MainRoutes
                                                        : LoginPage } />
                <Route exact path="/register" component={ user.logedin
                                                        ? MainRoutes
                                                        : RegisterPage } />
                <Route path="/" component={ MainRoutes } />

                <Redirect to="/login" /> 
            </Switch>
        </Router>
    )
}
