import React from 'react'
import Button from 'react-bootstrap/Button' 
import Card from 'react-bootstrap/Card'

const ItemDetail = ({items}) => {

  const {name, price, stock, image} = items
  
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
        <Button variant="dark">Agregar al carrito</Button>
        </Card.Body>
        </Card>
    </div>   
  )
  
}
  
export default ItemDetail
