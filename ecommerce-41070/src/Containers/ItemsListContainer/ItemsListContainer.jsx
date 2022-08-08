import { useEffect } from "react"
import {useState} from "react"

import { useParams } from "react-router-dom"

import ItemList from "./ItemList"

import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

const ItemListContainer = ({ greeting }) => {
   
  const [items, setItems] = useState ([])
  const [loading, setLoading] = useState(true)
  const {categoryId} = useParams ()
  

  const getApiFirestore = () => {
    const db = getFirestore()
      const queryCollection = collection(db, 'productos')
      const queryCollectionWhere = categoryId ? //para no repetir código reeplazo el if/else
                                  query (queryCollection, where('category','==', categoryId))
                                  :
                                  queryCollection
    getDocs(queryCollectionWhere)
    .then(resp => setItems(resp.docs.map(producto => ({ id: producto.id, ...producto.data()}) )))
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
  }

  useEffect(() => {
    getApiFirestore ()
  },[categoryId])
    
  return (
    loading ?
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    :
    <ItemList items={items}/>
  )
}
  
export default ItemListContainer
  