import { useCallback, useState } from "react"
import { db } from "../firebase"

const useRequestCollect = ({ collection='', filter=[] }) => {
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState('')
  const [ data, setData ] = useState([])

  const get = useCallback(async(search=[], orderby='') => {
    setLoading(true)
    const collectionRef = db.collection(collection)
    if( filter.length > 1 ){
      const [ param, consult, value ] = filter
      if(search.length > 1){
        const [ paramS, consultS, valueS ] = search
        return  await collectionRef.where(param, consult, value).where( paramS, consultS, valueS ).get()
        .then(snapshot => {
          const docs = [];
          snapshot.forEach(doc => {
              docs.push({...doc.data() , id: doc.id})
          });
          console.log('sda')
          setData(docs);
        })
        .catch(err => {
          setError(err)
        })
        .finally(()=>{
          setLoading(false)
        })
      }
      if(orderby){
        return await collectionRef.orderBy('rate', 'desc').get()
        .then(snapshot => {
          const docs = [];
          snapshot.forEach(doc => {
              docs.push({...doc.data() , id: doc.id})
          });
          setData(docs.filter(doc => doc.publish !== false));
        })
        .catch(err => {
          setError(err)
        })
        .finally(()=>{
          setLoading(false)
        })
      }
      return  await collectionRef.where(param, consult, value).get()
      .then(snapshot => {
        const docs = [];
        snapshot.forEach(doc => {
            docs.push({...doc.data() , id: doc.id})
        });
        setData(docs);
        console.log('sda')
      })
      .catch(err => {
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

  const remove = useCallback(async (id) => {
    setLoading(true)
    const collectionRef = db.collection(collection)
    return await collectionRef.doc(id).delete()
    .then(()=>{
      get()
    })
    .catch(err => {
      setError(err)
      setLoading(false)
    })

  },[ collection, get ]) 

  const update = useCallback( async (id, params) => {
    setLoading(true)
    const collectionRef = db.collection(collection)
    return await collectionRef.doc(id).update(params)
    .then(()=>{
      get()
    })
    .catch(err => {
      setError(err)
      setLoading(false)
    })

  },[ collection, get ])

  const add = useCallback( async (params) => {
    setLoading(true)
    const collectionRef = db.collection(collection)
    return await collectionRef.doc().set(params)
    .then(()=>{
      get()
    })
    .catch(err => {
      setError(err)
      setLoading(false)
    })

  },[ collection, get ]) 


  return { get, remove, update, add, data, loading, error }
}

export default useRequestCollect