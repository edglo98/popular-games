import React, {useEffect, useState} from 'react'
import LinkForm from '../../components/LinkForm/LinkForm'
import {db} from '../../firebase'

const Links = () => {

    const [links, setLinks] = useState([]);

    const addOrEdit = async (linkObject) =>{
         await db.collection('links').doc().set(linkObject);
         console.log('new task added')
    };

    const getLinks = async () =>{
        db.collection("links").onSnapshot(
            (querySnapshot) =>{
                const docs = [];
                querySnapshot.forEach((doc) => {
                    docs.push({...doc.data(), id:doc.id})
                });
                setLinks(docs);
        });
        
    }

    useEffect(() =>{
        getLinks();
    }, []);
    
    return (
        <>
        <LinkForm addOrEdit={addOrEdit}/> 
            <h1>Videojuegos</h1>
            {links.map(link => (
                <div>
                    <h4>{link.tittle}</h4>
                    <p>{link.description    }</p>
                </div>
            ))}        
        </>
    )
}

export default Links;
