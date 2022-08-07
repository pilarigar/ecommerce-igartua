import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { getFetch } from "../../helpers/productos"

import {useState, useEffect} from "react"
import { doc, getDoc, getFirestore } from "firebase/firestore"

import {useParams} from "react-router-dom"

const ItemDetailConteiner = () => {

  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)
  const {itemId} = useParams()

  useEffect(() => {
    const db = getFirestore()
    const queryProduct  =  doc(db, 'productos', itemId)
    getDoc(queryProduct)
    .then(resp =>  setItem( { id: resp.id, ...resp.data()}))
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
}, [itemId])

    
  return (
    loading ?
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    :
    <div style={{display: "flex", justifyContent: "center", margin: 20,}}>
      <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailConteiner

