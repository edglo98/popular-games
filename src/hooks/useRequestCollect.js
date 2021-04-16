import { useCallback, useState } from "react"
import { db } from "../firebase"

const useRequestCollect = ({ collection='', params={}, filter=[] }) => {
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState('')
  const [ data, setData ] = useState([])

  const get = useCallback(async() => {
    setLoading(true)
    const collectionRef = db.collection(collection)
    if( filter.length > 1 ){
      const [ param, consult, value ] = filter
      return  await collectionRef.where(param, consult, value).get()
      .then(snapshot => {
        const docs = [];
        snapshot.forEach(doc => {
            docs.push({...doc.data() , id: doc.id})
        });
        setData(docs);
      })
      .catch(err => {
        console.log(err)
        setError(err)
      })
      .finally(()=>{
        setLoading(false)
      })
    }

    return await collectionRef.get()
    .then(snapshot => {
      const docs = [];
      snapshot.forEach(doc => {
          docs.push({...doc.data() , id: doc.id})
      });
      setData(docs);
    })
    .catch(err => {
      console.log(err)
      setError(err)
    })
    .finally(()=>{
      setLoading(false)
    })
  },[ collection, filter ])

  const remove = useCallback((id) => {
    setLoading(true)
    const collectionRef = db.collection(collection)
    return collectionRef.doc(id).delete()
    .then(()=>{
      get()
    })
    .catch(err => {
      setError(err)
      setLoading(false)
    })

  },[ collection, get ]) 

  const update = useCallback((id) => {
    setLoading(true)
    const collectionRef = db.collection(collection)
    return collectionRef.doc(id).update(params)
    .catch(err => setError(err))
    .finally(() => setLoading(false))

  },[ collection, params ])

  const add = useCallback(() => {
    setLoading(true)
    const collectionRef = db.collection(collection)
    return collectionRef.doc().set(params)
    .catch(err => setError(err))
    .finally(() => setLoading(false))

  },[ collection, params ]) 


  return { get, remove, update, add, data, loading, error }
}

export default useRequestCollect