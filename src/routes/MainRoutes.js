import React, { useContext, useEffect, useState } from 'react'
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
import { db } from '../firebase';
import { UserContext } from '../context/UserContext';
import AdminPage from '../pages/AdminPage';


export default function AppRouter() {
    const [ isAdmin, setIsAdmin ] = useState( false )
    const { user } = useContext( UserContext )


    useEffect(() =>{
        if(user.uid){
            ;(async () =>{
                const refAdmin = await db.collection("admins")
                const a = await refAdmin.where('uid_admins', 'array-contains', user.uid).get()
                setIsAdmin(!a.empty)
            }
            )()
        }
    }, [ user.uid ]);

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
                {
                    isAdmin && <Route exact path="/admin" component={ AdminPage } />
                }
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
