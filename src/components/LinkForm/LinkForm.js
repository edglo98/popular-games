import React, {useState} from 'react'

const LinkForm = (props) => {

    const initialStateValues = {
        tittle:'',
        description:'',
    };
    const [values, setValues] = useState(initialStateValues);

    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({...values, [name]: value})
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values);
        setValues({...initialStateValues})

    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input value={values.tittle} onChange={handleInputChange} type="text" placeholder="Escriba el título" name="tittle"></input>
            </div>
            <div>
                <input value={values.description} onChange={handleInputChange} type="text" placeholder="Escribe la descripción" name="description"></input>
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