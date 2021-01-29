import React, { useState } from 'react'
import "./styles.css"
import images from '../../assets/images'
import { useForm } from '../../hooks/useForm'
import Spinner from '../../components/Spinner'
import InputFile from '../InputFile'
import { toast } from 'react-toastify'
import firebase from 'firebase'
import { db } from '../../firebase'

export default function RegisterForm( ) {
    // const { setUser } = useContext(UserContext)
    const [values, handleInputChange] = useForm({})
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [porcentage, setPorsentage] = useState(0)


    const handleParseData = (data) => {
        
        const recomData = {
            name: data?.name || "",
            company: data?.company || "",
            plataform: data?.plataform || "",
            description: data?.description || "",
        }

        const imgFile = data?.img_url

        return { recomData, imgFile }

    }
  
    const handleSubmit = async(e) => {
        e.preventDefault()
        setLoading(true)

        const { imgFile, recomData } = handleParseData(values)

        const storageRef = firebase.storage().ref(`pictures/${imgFile.name}`)
        const task = storageRef.put(imgFile)

        task.on('state_changed',snapshot=>{
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
                db.collection('recommendations').doc().set(finalData)
                .then(()=>{
                    toast.dark("Su propuesta se ha enviado con exito 🤗")
                })
                .catch(error=>{
                    setError(error)
                })
                .finally(()=>{
                    setLoading(false)

                })
            })
        })
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
            
            <select className="form__input" onChange={handleInputChange} name="plataform">

                <option>Seleccione...</option>
                <option value="MULTI">Multiplataforma</option>
                <option value="PS4">PS4</option>
                <option value="XBOX">XBOX</option>
                <option value="Nintendo">Nintendo</option>
                <option value="PC">PC</option>

            </select>

            <textarea className="form__input input__textarea" type="textarea" onChange={ handleInputChange } name="description" placeholder="Puedes escribir una pequeña descripcion del juego" autoComplete="false" />
           
            <progress className="form__progress" value={porcentage} max='100'>
                {porcentage} %
            </progress>
            <InputFile previews={values.img_url && URL.createObjectURL(values?.img_url)} onChange={ handleInputChange } name="img_url" placeholder="igresa una imagen" />

            <button 
            className="btn btn__primary">
                {props.currentId === '' ? 'Guardar': 'Actualizar'}
            </button>

        </form>
    )
}

export default RegisterForm