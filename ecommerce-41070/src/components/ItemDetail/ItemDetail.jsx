import {useState} from "react"

import ItemCount from "../ItemCount/ItemCount"
import InputCount from "../InputCount/InputCount"
import { useCartContex } from "../../Context/CartContext"

import Card from 'react-bootstrap/Card'

const ItemDetail = (items = {}) => {
  const {agregarAlCarrito, cartList}= useCartContex ()

  const [inputType, setInputType ] = useState('boton')

  const onAdd = (quantity) => {
  console.log (quantity);
  agregarAlCarrito ({...items, cantidad: quantity});
  setInputType('input');
  }

  console.log (cartList)

  return (
    <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src= {items.image} />
        <Card.Body>
        <Card.Title>{items.name}</Card.Title>
        <Card.Text>
          ${items.price}
          <br />
          stock:{items.stock}
        </Card.Text>
        {inputType === 'boton' ? 
                    <ItemCount initial={1} stock={5} onAdd={onAdd}  />
                : 
                    <InputCount/>
                  } 
        </Card.Body>
        </Card>
    </div>   
  )
  
}
  
export default ItemDetail

/*const [inputType, setInputType ] = useState('boton')
  const onAdd=()=>{
    setInputType('boton')
  }*/