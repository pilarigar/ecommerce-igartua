import React from 'react'
import Button from 'react-bootstrap/Button' 
import Card from 'react-bootstrap/Card'

import {Link} from "react-router-dom"

const Item = ({item}) => {
  const {name, price, stock, image, categoria} = item 

  return (
    <Card style={{ width: '18rem' }} key={item.id}>
      <Card.Img variant="top" src= {image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          ${price}
          <br />
          stock:{stock}
        </Card.Text>
        <Link to={`/detalle/${item.id}`}>
          <Button variant="dark">Ver detalles</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Item