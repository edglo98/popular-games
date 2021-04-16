import React from 'react'
import './styles.css'
import { GiPirateGrave } from "react-icons/gi";
import { GiHealthCapsule } from "react-icons/gi";
import { GiHealthPotion } from "react-icons/gi";

export default function RecomItem({handleDelete, handleUpdate, ...recom}) {

  return (
    <>
    <div className='recom-item-container'>
      <div className='recom-item-img'>
        <img alt={recom.name} src={recom.image_url}/>
      </div>
      <div>
        <h3>
          Nombre
        </h3>
        <h4>
          {recom.name}
        </h4>
      </div>
      <div>
        <h3>
          Descripción
        </h3>
        <h5>
          {recom.description}
        </h5>
      </div>
      <div>
        <h3>
          Estudio
        </h3>
        <h5>
          {recom.company}
        </h5>
      </div>
      <div>
        <h3>
          Plataforma
        </h3>
        <h5>
          {recom.plataform}
        </h5>
      </div>
      <div className='recom-item-options'>
        <button onClick={()=>handleDelete(recom.id)} className='recom-item-button recom-item-button__bg'>
          <GiPirateGrave />
        </button>
        <button onClick={()=>handleUpdate(recom.id)} className='recom-item-button recom-item-button__bg'>
          <GiHealthPotion />
        </button>
        <button className='recom-item-button'>
          <GiHealthCapsule />
        </button>
      </div>
    </div>
    </>
  )
}
