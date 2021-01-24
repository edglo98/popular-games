import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import HomePage from '../pages/HomePage'
import Navbar from "../layout/Navbar"


export default function AppRouter() {
    return (
        <>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={ HomePage } />

                <Redirect to="/" />
            </Switch>
        </>
    )
}
