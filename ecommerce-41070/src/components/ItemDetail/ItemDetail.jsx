import {useState} from "react"

import ItemCount from "../ItemCount/ItemCount"
import InputCount from "../InputCount/InputCount"

import React from 'react'
import Button from 'react-bootstrap/Button' 
import Card from 'react-bootstrap/Card'

const ItemDetail = ({items}) => {

  /*const [ contador , actualizarContador ] = useState(1)
    
  const disminuir = () => {    
   actualizarContador(contador - 1) 
  }  

  const aumentar = () => {    
    actualizarContador(contador + 1) 
  } */

  const {name, price, stock, image} = items

  const onAdd = (quantity) => {
    console.log (quantity);
  }

  const [inputType, setInputType ] = useState('button')

  const handleInter=()=>{
    setInputType('input')
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
        {inputType === 'button' ? 
                    <ItemCount initial={1} stock={5} onAdd={onAdd} handleInter={handleInter} />
                : 
                    <InputCount/>} 
        </Card.Body>
        </Card>
    </div>   
  )
  
}
  
export default ItemDetail

//<ItemCount initial={1} stock={5} onAdd={onAdd}/>
