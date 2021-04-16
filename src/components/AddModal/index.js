
import React from 'react'
import Modal from 'react-modal';

export default function AddModal({handler, onClose}) {
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

  return (
    <Modal
      isOpen={handler}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Example Modal"
    >

      <h2 >¿Cuál juego es este?</h2>
      <div>Ingresa uno de los valores</div>
      <input className='form__input' type='text'/>
      <div>
        <button className="btn btn__primary">Aceptar</button>
        <button onClick={onClose} className="btn btn__primary">Cancelar</button>
      </div>
    </Modal>
  )
}
