import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import HomePage from '../pages/HomePage'
import Navbar from "../layout/Navbar"
import GamePage from '../pages/GamePage'
import GamesPage from '../pages/GamesPage'
import DashCrud from '../pages/DashCrud'
import RecomPage from '../pages/RecomPage';
import { ToastContainer } from 'react-toastify';


export default function AppRouter() {
    return (
        <>
        <Navbar/>
        <ToastContainer
            position="top-center"
            autoClose={2500}
        />
        <div style={{
            width: "100%",
            maxWidth: 1200,
            margin: "2em auto"
        }}>
            <Switch>
                <Route exact path="/" component={ HomePage } />
                <Route path="/game" component={ GamePage } />
                <Route path="/recom" component={ RecomPage } />
                <Route path="/games" component={ GamesPage } />
                <Route path="/dashcrud" component={ DashCrud } />

                <Redirect to="/" />
            </Switch>

        </div>
        </>
    )
}
