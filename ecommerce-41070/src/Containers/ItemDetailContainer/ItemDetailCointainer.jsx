import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { getFetch } from "../../helpers/productos"

import {useState, useEffect} from "react"

import {useParams} from "react-router-dom"

const ItemDetailConteiner = () => {

  const [items, setItems] = useState({})
  const {itemId} = useParams()

  useEffect (()=> {
    getFetch (itemId)  
      .then (data => setItems (data))
  }, [itemId])
    
  return (
    <div style={{display: "flex", justifyContent: "center", margin: 20,}}>
        
      <ItemDetail items={items}/>
        
    </div>
  )
}

export default ItemDetailConteiner

