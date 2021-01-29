import React, {useEffect, useState} from 'react'
import CardGame from '../../components/CardGame/CardGame'
import RecomPage from '../../pages/RecomPage/index'
import {db} from '../../firebase'

export default function GamesPage() {

    const [games, setGames] = useState([])

    const getGames = async () =>{
        db.collection("recommendations").onSnapshot(
            (querySnapshot) =>{
                const docs = [];
                querySnapshot.forEach((doc) => {
                    docs.push({...doc.data(), id:doc.id})
                });
                setGames(docs);
        });
    }

    useEffect(() =>{
        getGames();
    }, []);

    return (
        
        <div>
            {games.map(games => (

                <CardGame
                title={games.name}
                img={games.image_url}
                sub={games.company} 
                />

            ))}    
        </div>
    )
}
