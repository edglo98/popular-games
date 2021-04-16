import React, { useState } from 'react'
import "./styles.css"
import firebase from 'firebase'
import InputFile from '../InputFile'
import images from '../../assets/images'
import Spinner from '../../components/Spinner'
import { db } from '../../firebase'
import { useForm } from '../../hooks/useForm'
import { toast } from 'react-toastify'

export default function RegisterForm( ) {
    // const { setUser } = useContext(UserContext)
    const [values, handleInputChange, resetValues] = useForm({})
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [porcentage, setPorsentage] = useState(0)


    const handleParseData = (data) => {
        
        const recomData = {
            name: data?.name || "",
            company: data?.company || "",
            plataform: data?.plataform || "",
            description: data?.description || "",
            publish: false,
            rate: 1
        }

        const imgFile = data?.img_url

        return { recomData, imgFile }

    }
  
    const handleSubmit = async(e) => {
        e.preventDefault()
        setLoading(true)

        
        const { imgFile, recomData } = handleParseData(values)
        if(imgFile){
            let min = 1718;
            let max = 3429;

            let x = Math.floor(Math.random()*(max-min+1)+min);
            const storageRef = firebase.storage().ref(`pictures/${imgFile.name}${x}`)
            const task = storageRef.put(imgFile)
    
            return task.on('state_changed',snapshot=>{
                let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setPorsentage(
                    percentage
                )
            },error=>{
                setError(error)
            },()=>{
                //promesa dos
                task.snapshot.ref.getDownloadURL().then(downloadURL=>{
                    const finalData = {
                        ...recomData,
                        image_url: downloadURL
                    }
                    console.log(finalData)
                    db.collection('recommendations').doc().set(finalData)
                    .then(()=>{
                        toast.dark("Su propuesta se ha enviado con exito 🤗")
                    })
                    .catch(error=>{
                        setError(error)
                    })
                    .finally(()=>{
                        setLoading(false)
                        setPorsentage(0)
                        resetValues()
                    })
                })
            })
        }
        db.collection('recommendations').doc().set(recomData)
                    .then(()=>{
                        toast.dark("Su propuesta se ha enviado con exito 🤗")
                    })
                    .catch(error=>{
                        setError(error)
                    })
                    .finally(()=>{
                        setLoading(false)
                        setPorsentage(0)
                        resetValues()
                    })

    }

    return (
        <form className="recom__form" onSubmit={ handleSubmit }>
            {error?.message}
            
            <img
                alt="gif animado de sonic"
                className="register__sonic"
                src={images.Sonic5} 
            />
            
            <input autocomplete='off' className="form__input" value={values.name} type="text" onChange={ handleInputChange } name="name" required placeholder="Escribe el nombre completo del juego" autoComplete="false" />

            <input className="form__input" value={values.company} type="text" onChange={ handleInputChange } name="company" required placeholder="Escribe el estudio al que pertenece" autoComplete="false" />
            
            <select className="form__input" value={values.plataform} onChange={handleInputChange} name="plataform">

                <option>Plataforma...</option>
                <option value="MULTI">Multiplataforma</option>
                <option value="PS4">PS4</option>
                <option value="XBOX">XBOX</option>
                <option value="Nintendo">Nintendo</option>
                <option value="PC">PC</option>

            </select>

            <textarea className="form__input input__textarea" value={values.description} type="textarea" onChange={ handleInputChange } name="description" placeholder="Puedes escribir una pequeña descripcion del juego" autoComplete="false" />
           
            {
                porcentage > 0 &&
                <progress className="form__progress" value={porcentage} max='100'>
                    {porcentage} %
                </progress>
            }

            <InputFile previews={values.img_url && URL.createObjectURL(values?.img_url)} onChange={ handleInputChange } name="img_url" placeholder="igresa una imagen" />

            <button type="submit" className="btn btn__primary">{loading? <Spinner/>: "Enviar recomendacion"}</button>

        </form>
    )
}