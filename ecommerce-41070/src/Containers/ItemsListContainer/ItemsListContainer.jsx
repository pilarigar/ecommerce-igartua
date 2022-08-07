import { useEffect } from "react"
import {useState} from "react"

import { useParams } from "react-router-dom"

import { getFetch } from "../../helpers/productos"

import Item from "./Item"
import ItemList from "./ItemList"

import { collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, where } from 'firebase/firestore'

const ItemListContainer = ({ greeting }) => {
   
  const [items, setItems] = useState ([])
  const [loading, setLoading] = useState(true)
  const {categoriaId} = useParams ()

  useEffect(() => {
    const db = getFirestore()
    const queryColleccion = collection(db, 'productos')
    getDocs(queryColleccion)
    .then(resp => setItems(resp.docs.map(producto => ({ id: producto.id, ...producto.data()}) )))
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
  },[])

  console.log (items)
    
  return (
    loading ?
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    :
    <ItemList items={items}/>
    //<ItemCount initial={1} stock={5} onAdd={onAdd}/>
   
  )
}
  
export default ItemListContainer
  