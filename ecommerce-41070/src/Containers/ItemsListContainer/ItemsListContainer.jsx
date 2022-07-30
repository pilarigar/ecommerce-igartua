import { useEffect } from "react"
import {useState} from "react"

import { useParams } from "react-router-dom"

import { getFetch } from "../../helpers/productos"

import Item from "./Item"
import ItemList from "./ItemList"

const ItemListContainer = ({ greeting }) => {
   
  const [items, setItems] = useState ([])
  const [loading, setLoading] = useState(true)
  const {categoriaId} =useParams ()

  useEffect (()=> {
    if (categoriaId) {
      getFetch ()
      .then (res => setItems (res.filter(items => items.categoria === categoriaId)))
      .catch( error => console.log(error)) 
      .finally(() => setLoading(false))             
    } else {
      getFetch ()  
        .then (res => setItems (res))
        .catch (error => console.log (error))
        .finally(() => setLoading(false))  
    }      
  }, [categoriaId])

  console.log (items)

  const onAdd = (quantity) => {
    console.log (quantity);
  }
    
  return (
    loading ?
    <h1>Cargando</h1>
    :
    <ItemList items={items}/>
    //{ greeting }<br></br>
    //<ItemCount initial={1} stock={5} onAdd={onAdd}/>
   
  )
}
  
export default ItemListContainer
  
  
//{ contador } <br />
//<button onClick = {disminuir}>-</button>
//<button onClick={aumentar}>+</button>