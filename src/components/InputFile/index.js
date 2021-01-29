import React from 'react'
import images from '../../assets/images'
import './styles.css'

export default function InputFile({ previews="", onChange, name, placeholder }){
    console.log(!previews)
    return (
        <div className="input__file">
            <label style={{backgroundImage: `url(${ !previews? images.Upload : previews })`}} htmlFor={ name }></label>
            <input type="file" onChange={ onChange } name={name} id={ name } placeholder={ placeholder } autoComplete="false" />
        </div>
    )
}
