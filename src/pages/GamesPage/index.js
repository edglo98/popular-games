import React, {useEffect, useState} from 'react'
import CardGame from '../../components/CardGame/CardGame'
import InputSearch from '../../components/InputSearch/index.'
import Spinner from '../../components/Spinner'
import useRequestCollect from '../../hooks/useRequestCollect'
import './styles.css'

export default function GamesPage() {
    const [ search, setSearch ] = useState('')
    const { get, data, loading, error } = useRequestCollect({collection: 'recommendations', filter: ["publish","==",true] })

    useEffect(()=>{
        
        get(search? ['name', '==', search] : [])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[ search ])
    
    return (
        <>
            <InputSearch 
                setSearchValue={setSearch}
            />
            <div className='gamespages-container-list' >
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
        </>
    )
}
