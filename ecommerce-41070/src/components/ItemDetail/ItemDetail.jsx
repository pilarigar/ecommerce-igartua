import {useState} from "react"

import ItemCount from "../ItemCount/ItemCount"
import InputCount from "../InputCount/InputCount"
import { useCartContex } from "../../Context/CartContext"

import Card from 'react-bootstrap/Card'

const ItemDetail = ({item = {}}) => {
  const {AddToCart, cartList}= useCartContex ()

  const [inputType, setInputType ] = useState('button')

  const onAdd = (quantity) => {
  console.log (quantity);
  AddToCart ({...item, quantity: quantity});
  setInputType('input');
  }

  console.log (cartList)

  return (
    <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src= {item.image} />
        <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          ${item.price}
          <br />
          stock:{item.stock}
        </Card.Text>
        {inputType === 'button' ? 
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
