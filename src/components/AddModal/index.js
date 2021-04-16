
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { Spinner } from 'reactstrap';
import useRequestCollect from '../../hooks/useRequestCollect';

export default function AddModal({handler, idEdit, onClose}) {
  const [ selecter, setSelecter ] = useState('')
  const customStyles = {
    content : {
      backgroundColor: 'var(--dark)',
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  }

  Modal.setAppElement('#root');

  const { update, remove, get, data, loading } = useRequestCollect({collection: 'recommendations', filter: ["publish","==",true] })

  useEffect(()=>{
    get()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[ ])

  const handleInputChange = (e) => {
    const { value } = e.target
    const jsonValue = JSON.parse(value)
    setSelecter(jsonValue)
  }

  const handleUpdate = () => {
    update(selecter.id, { rate: selecter.rate + 1 })
    .then(()=>{
      console.log(idEdit)
      remove(idEdit)
      .then(()=>{
        onClose()
      })
    })
  }

  return (
    <Modal
      isOpen={handler}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Example Modal"
    >

      <h2 >¿Cuál juego es este?</h2>
      <div>Ingresa uno de los valores</div>

      <select className="form__input" value={selecter} onClick={()=>get()} onChange={handleInputChange} name="game" style={{width: '100%'}}>

          <option>Videojuego...</option>
          {
            loading 
            ? <Spinner />
            : data.map( recom => {
              return <option key={recom.id} value={JSON.stringify(recom)}>{recom.name}</option>
            })
          }
      </select>

      <div>
        <button disabled={loading} className="btn btn__primary" onClick={handleUpdate} >{loading? <Spinner /> : "Aceptar"}</button>
        <button onClick={onClose} className="btn btn__primary" style={{backgroundColor: 'transparent'}}>Cancelar</button>
      </div>
    </Modal>
  )
}
