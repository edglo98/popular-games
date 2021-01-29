import { useState } from 'react';


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }


    const handleInputChange = ({ target }) => {
        if(target.type==="file"){
            setValues({
                ...values,
                [ target.name ]: target.files[0]
            });
        }else{
            setValues({
                ...values,
                [ target.name ]: target.value
            });
        }

    }

    return [ values, handleInputChange, reset ];

}