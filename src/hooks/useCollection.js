import { useCallback, useEffect, useState } from "react"
import { db } from '../firebase'

const useCollection = ({collection='', query={}}) => {
  const [ loading, setLoading ] = useState(true)
  const [ data, setData ] = useState([])
  const [ error, setError ] = useState()

  const getData = useCallback(async() => {
    const collectionRef = db.collection(collection)
    if( Object.keys(query).length > 1 ){
      return
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
      setError(err)
    })
    .finally(()=>{
      setLoading(false)
    })
  },[ collection, query ])

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[ ])

  return [ loading, error, data ]

}

export default useCollection