import React from 'react'
import LinkForm from '../../components/LinkForm/LinkForm'
import {db} from '../../firebase'

const Links = () => {

    const addOrEdit = async (linkObject) =>{
         await db.collection('links').doc().set(linkObject);
         console.log('new task added')
    };
    return (
        <LinkForm addOrEdit={addOrEdit}/> 
    )
}

export default Links;
