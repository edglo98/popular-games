import React, { useEffect } from 'react'
import { Spinner } from 'reactstrap'
import CardGame from '../../components/CardGame/CardGame'
import FirstsGames from '../../components/FirstsGames'
import SecondsGames from '../../components/SecondsGames'
import useRequestCollect from '../../hooks/useRequestCollect'
import './styles.css'

export default function HomePage() {
    const arr = [{
        id:"1",
        title:'The last of us II',
        sub:'Naughty Dog/SIE',
        img:'https://thegameawards.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fthe-game-awards-api.appspot.com%2F1%2F2020%2F11%2FThe_Last_Of_Us_Part_II_1080x1080_opt-1.jpg&w=1920&q=75',
    },
    {
        id:"2",
        title:'Ori and the Will of the Wisps',
        sub:'Moon Studios/Xbox Game Studios',
        img:'https://thegameawards.com/_next/image?url=https://storage.googleapis.com/the-game-awards-api.appspot.com/1/2020/11/Ori_and_the_Will_of_the_Wisps_1080x1080_opt.jpg&w=1920&q=75',
    },
    {
        id:"3",
        title:'13 Sentinels: Aegis Rim',
        sub:'written by George Kamitani',
        img:'https://thegameawards.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fthe-game-awards-api.appspot.com%2F1%2F2020%2F11%2F13-Sentinels-Aegis-Rim_1080x1080_opt.jpg&w=3840&q=75',
    },
    {
        id:"4",
        title:'Half-Life: Alyx',
        sub:'Valve',
        img:'https://thegameawards.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fthe-game-awards-api.appspot.com%2F1%2F2020%2F11%2FHalf-Life-Alyx_1080x1080_opt.jpg&w=1920&q=75',
    },
    {
        id:"5",
        title:'Animal Crossing: New Horizons',
        sub:'Nintendo',
        img:'https://thegameawards.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fthe-game-awards-api.appspot.com%2F1%2F2020%2F11%2FAnimal-Crossing-New-Horizons_1080x1080_opt.jpg&w=1920&q=75',
    },
    {
        id:"6",
        title:'Hades',
        sub:'Supergiant Games',
        img:'https://thegameawards.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fthe-game-awards-api.appspot.com%2F1%2F2020%2F11%2FHades_1080x1080_opt.jpg&w=3840&q=75',
    },
    {
        id:"7",
        title:'Ghost of Tsushima',
        sub:'Sucker Punch/SIE',
        img:'https://thegameawards.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fthe-game-awards-api.appspot.com%2F1%2F2020%2F11%2FGhost_of_Tsushima_1080x1080_opt-1.jpg&w=3840&q=75',
    },
    {
        id:"8",
        title:'Final Fantasy VII Remake',
        sub:'Square Enix',
        img:'https://thegameawards.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fthe-game-awards-api.appspot.com%2F1%2F2020%2F11%2FFF_VII_Remake_1080x1080_opt.jpg&w=3840&q=75',
    },
    {
        id:"9",
        title:'DOOM Eternal',
        sub:'id Software/Bethesda',
        img:'https://thegameawards.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fthe-game-awards-api.appspot.com%2F1%2F2020%2F11%2FDOOM_Eternal_1080x1080_opt.jpg&w=3840&q=75',
    }]
 
    const { get, data, loading, error } = useRequestCollect({collection: 'recommendations', filter: ["publish","==",true] })
    // const {user} = useContext( UserContext )
    useEffect(()=>{
        
        get([],'rate')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[ ])

    loading? console.log('cargando...') : console.log(data)

    if(loading || data.length < 1){
        return <Spinner/>
    }
    
    if( error ){
        return <div>
            {error}
        </div>
    }

    const first = data.slice(0,3)
    const secondpart = data.slice(3,7)

    console.log(data)
    return (
        <>
        <h1 style={{textAlign: "center"}}>
            Top 6 juegos más populares
        </h1>
        <FirstsGames
            places={first}
        />
        <SecondsGames
            places={secondpart}
        />
        <h1 style={{textAlign: "center"}}>
            Juegos participando
        </h1>
        <div className="listgame__container">
            {
                arr.reverse().map(i=>(
                    <CardGame
                        key={i.id}
                        title={i.title}
                        sub={i.sub}
                        img={i.img}
                    />
                ))
            }
        </div>
        </>
    )
}
