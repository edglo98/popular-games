import React, { useEffect, useState } from 'react'
import { Spinner } from 'reactstrap'
import AddModal from '../../components/AddModal'
import RecomItem from '../../components/RecomItem'
import useRequestCollect from '../../hooks/useRequestCollect'

export default function AdminPage() {
  const [ isOpen, setIsOpen ] = useState(false)
  // const [ error, loading, data ] = useCollection({collection: 'recommendations'})

  const { get, remove, data, loading, error } = useRequestCollect({collection: 'recommendations', filter: ["publish","==",false] })

  useEffect(()=>{
    get()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[ ])

  const handleDelete = (id) => {
    remove(id)
  }

  const handleUpdate = (id) => {
    setIsOpen(true)
    console.log(id)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <AddModal
        handler={isOpen}
        onClose={handleCloseModal}
      />
      <h1 style={{textAlign: 'center'}}>
        Administra las recomendaciones de los usuarios
      </h1>
      {
        loading 
          ? <Spinner />
          : error
              ? <div>
                { error.message }
              </div>
              : data.map( recom => {
                return <RecomItem 
                        key={recom.id} 
                        handleDelete={ handleDelete }
                        handleUpdate={ handleUpdate }
                        {...recom} 
                      />
              })
      }

    </div>
  )
}
