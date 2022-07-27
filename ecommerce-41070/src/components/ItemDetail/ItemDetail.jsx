import {useState} from "react"

import ItemCount from "../ItemCount/ItemCount"

import React from 'react'
import Button from 'react-bootstrap/Button' 
import Card from 'react-bootstrap/Card'



const ItemDetail = ({items}) => {

  const [ contador , actualizarContador ] = useState(1)
    
  const disminuir = () => {    
   actualizarContador(contador - 1) 
  }  

  const aumentar = () => {    
    actualizarContador(contador + 1) 
  }  
    
  console.log('item List Container rendered')

  const {name, price, stock, image} = items

  const onAdd = (quantity) => {
    console.log (quantity);
  }
  
  return (
    <div>
        <Card style={{ width: '18rem' }} key={items.id}>
        <Card.Img variant="top" src= {image} />
        <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          ${price}
          <br />
          stock:{stock}
        </Card.Text>
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        </Card.Body>
        </Card>
    </div>   
  )
  
}
  
export default ItemDetail
