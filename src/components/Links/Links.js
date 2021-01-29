import React, {useEffect, useState} from 'react'
import LinkForm from '../../components/LinkForm/LinkForm'
import {db} from '../../firebase'
import {toast} from 'react-toastify'    

const Links = () => {

    const [links, setLinks] = useState([]);

    const [currentId, setCurrentId] = useState('');

    const addOrEdit = async (linkObject) =>{

        if (currentId === ''){
            await db.collection('links').doc().set(linkObject);
            toast('Nueva sugerencia añadida',{
             type:'success'
             });
        } else {
            await db.collection('links').doc(currentId).update(linkObject);
            toast('Sugerencia actualizada',{
                type:'info'
            });
            setCurrentId('');
        }
    };

    const onDelete = async (id) => {
        if(window.confirm('¿Estás seguro de eliminar esta sugerencia?')){
            await db.collection('links').doc(id).delete();
            toast('Sugerencia eliminada ',{
                type:'error',
                autoClose:2000,
            })
        }
    }

    const getLinks = async () =>{
        db.collection("recommendations").onSnapshot(
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
        <LinkForm {...{addOrEdit, currentId, links}}/> 
            <h1>Videojuegos</h1>
            {links.map(link => (

                <div className='cardgame-container-list' key={link.id}>
                        <i className="material-icons" 
                        onClick={() => onDelete(link.id)}>close</i>
                        <i className="material-icons" 
                        onClick={() => setCurrentId(link.id)}>create</i>
                    <div className='cardgame-content'>
                        <h4>{link.tittle}</h4>
                        <p>{link.description}</p>
                        <p>{link.company}</p>
                    </div>
                </div>

            ))}        
        </>
    )
}

export default Links;
