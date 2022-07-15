import React from 'react'
import Button from 'react-bootstrap/Button' 
import Card from 'react-bootstrap/Card'

const Item = ({item}) => {
  const {name, price, stock, image} = item 

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          ${price}
          <br />
          stock:{stock}
        </Card.Text>
        <Button variant="dark">seleccionar</Button>
      </Card.Body>
    </Card>
  )
}

export default Item