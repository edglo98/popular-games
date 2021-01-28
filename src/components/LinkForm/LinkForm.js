import React, {useState, useEffect} from 'react'
import { db } from '../../firebase';


const LinkForm = (props) => {

    const initialStateValues = {
        tittle:'',
        description:'',
        company:'',
    };
    const [values, setValues] = useState(initialStateValues);

    const getGameId = async(id) =>{
        cosnt doc = await db.collection('links').doc(id).get();
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
        console.log(props.currentId)
        if (props.currentId === ''){
            setValues({...initialStateValues});
        } else {
            console.log('editing')
        }
    }, [props.currentId]);

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input value={values.tittle} onChange={handleInputChange} type="text" placeholder="Escriba el título" name="tittle"></input>
            </div>
            <div>
                <input value={values.description} onChange={handleInputChange} type="text" placeholder="Escribe la descripción" name="description"></input>
            </div>
            <div>
                <input value={values.company} onChange={handleInputChange} type="text" placeholder="Escribe la compañia" name="company"></input>
            </div>
            <div>
                <button>
                    save
                </button>
            </div>
        </form>
    )
}

export default LinkForm