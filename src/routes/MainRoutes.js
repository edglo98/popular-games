import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import HomePage from '../pages/HomePage'
import Navbar from "../layout/Navbar"
import GamePage from '../pages/GamePage'
import DashCrud from '../pages/DashCrud'


export default function AppRouter() {
    return (
        <>
        <Navbar/>
        <div style={{
            width: "100%",
            maxWidth: 1200,
            margin: "2em auto"
        }}>
            <Switch>
                <Route exact path="/" component={ HomePage } />
                <Route path="/game" component={ GamePage } />
                <Route path="/dashcrud" component={ DashCrud } />

                <Redirect to="/" />
            </Switch>

        </div>
        </>
    )
}
