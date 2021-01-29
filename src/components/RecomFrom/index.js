import React, { useContext, useState, useEffect } from 'react'
import "./styles.css"
import images from '../../assets/images'
import { UserContext } from '../../context/UserContext'
import { useForm } from '../../hooks/useForm'
import Spinner from '../../components/Spinner'
import InputFile from '../InputFile'
import { db } from '../../firebase';  


const RegisterForm = (props) => {

    const { setUser } = useContext(UserContext)
    const [prev, setPrev] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleFile = async(e) => {
        e.preventDefault()
        console.log(e.target.files[0])
        setPrev(URL.createObjectURL(e.target.files[0]))
    }

    const initialStateValues = {
        tittle:'',
        description:'',
        company:'',
    };
    const [values, setValues] = useState(initialStateValues);

    const getGameId = async (id) => {
        const doc = await db.collection('links').doc(id).get();
        setValues({...doc.data()})
    }

    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({...values, [name]: value})
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.addOrEdit(values);
        setValues({...initialStateValues})
    };

    useEffect(() => {
        if (props.currentId === ''){
            setValues({...initialStateValues});
        } else {
            getGameId(props.currentId)
        }
    }, [props.currentId]);
    
    return (
        <form className="recom__form" onSubmit={handleSubmit}>
            {error?.message}
            <img
                alt="gif animado de sonic"
                className="register__sonic"
                src={images.Sonic5} 
            />
            <h1></h1>

            <input 
            value={values.tittle} 
            className="form__input" 
            type="text" 
            onChange={ handleInputChange } 
            name="name" 
            required placeholder="Escribe el nombre completo del juego" 
            autoComplete="false" />

            <input 
            value={values.company} 
            className="form__input" 
            type="text" 
            onChange={ handleInputChange } 
            name="company" 
            required placeholder="Escribe el estudio al que pertenece" 
            autoComplete="false" />
            
            <textarea 
            value={values.description} 
            className="form__input input__textarea" 
            type="textarea" 
            onChange={ handleInputChange } 
            name="description" 
            placeholder="Puedes escribir una pequeña descripcion del juego" 
            autoComplete="false" />
           
            <InputFile previews={prev} onChange={ handleFile } name="img_url" placeholder="igresa una imagen" />

            <button 
            className="btn btn__primary">
                {props.currentId === '' ? 'Guardar': 'Actualizar'}
            </button>

        </form>
    )
}

export default RegisterForm