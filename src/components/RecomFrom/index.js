import React, { useContext, useState } from 'react'
import "./styles.css"
import images from '../../assets/images'
import { UserContext } from '../../context/UserContext'
import { useForm } from '../../hooks/useForm'
import Spinner from '../../components/Spinner'
import InputFile from '../InputFile'

export default function RegisterForm( ) {
    const { setUser } = useContext(UserContext)
    const [values, handleInputChange] = useForm({})
    const [prev, setPrev] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
  
    const handleSubmit = async(e) => {
        e.preventDefault()
        setLoading(true)
        // promesa
    }

    const handleFile = async(e) => {
        e.preventDefault()
        console.log(e.target.files[0])
        setPrev(URL.createObjectURL(e.target.files[0]))
    }

    return (
        <form className="recom__form" onSubmit={ handleSubmit }>
            {error?.message}
            <img
                alt="gif animado de sonic"
                className="register__sonic"
                src={images.Sonic5} 
            />
            <h1></h1>

            <input className="form__input" type="text" onChange={ handleInputChange } name="name" required placeholder="Escribe el nombre completo del juego" autoComplete="false" />

            <input className="form__input" type="text" onChange={ handleInputChange } name="company" required placeholder="Escribe el estudio al que pertenece" autoComplete="false" />
            
            <input className="form__input" type="dropdown" onChange={ handleInputChange } name="plataforms" placeholder="Seleccione" autoComplete="false" />

            <textarea className="form__input input__textarea" type="textarea" onChange={ handleInputChange } name="description" placeholder="Puedes escribir una pequeña descripcion del juego" autoComplete="false" />
           
            <InputFile previews={prev} onChange={ handleFile } name="img_url" placeholder="igresa una imagen" />

            <button type="submit" className="btn btn__primary">{loading? <Spinner/>: "Crear cuenta"}</button>

        </form>
    )
}