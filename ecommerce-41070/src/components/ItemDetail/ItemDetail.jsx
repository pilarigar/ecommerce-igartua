import {useState} from "react"

import ItemCount from "../ItemCount/ItemCount"
import InputCount from "../InputCount/InputCount"

import React from 'react'
import Button from 'react-bootstrap/Button' 
import Card from 'react-bootstrap/Card'


const ItemDetail = ({items}) => {

  const {name, price, stock, image} = items

  const [inputType, setInputType ] = useState('boton')

  const onAdd = (quantity) => {
  console.log (quantity);
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