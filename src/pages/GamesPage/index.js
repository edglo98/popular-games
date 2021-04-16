import React, {useEffect} from 'react'
import CardGame from '../../components/CardGame/CardGame'
import Spinner from '../../components/Spinner'
import useRequestCollect from '../../hooks/useRequestCollect'

export default function GamesPage() {
    const { get, data, loading, error } = useRequestCollect({collection: 'recommendations', filter: ["publish","==",true] })

    useEffect(()=>{
        get()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[ ])

    return (
        
        <div>
            {
                loading 
                ? <Spinner />
                : error
                    ? <div>
                        { error.message }
                    </div>
                    : data.map( games => {
                        return <CardGame
                                key={games.id}
                                title={games.name}
                                img={games.image_url}
                                sub={games.company} 
                            />
                    })
            }  
        </div>
    )
}
