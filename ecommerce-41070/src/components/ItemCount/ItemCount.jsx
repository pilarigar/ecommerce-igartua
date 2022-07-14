
import {useState} from "react"


const ItemCount = ({initial, stock, onAdd}) => {
   
  const [ count , actualizarContador ] = useState(initial)
    
  const decrease = () => {    
  actualizarContador(count - 1) 
  }  

  const increase = () => {    
  actualizarContador(count + 1) 
  }  
    
  return (
    <div>
      <button disabled = { count <= 1 } onClick= {decrease}>-</button>
      <span>{count} </span>
      <button disabled={ count >= stock } onClick= {increase}> +</button> 
      <br />
      <div>
      <button disabled={stock <=0 } onClick={()=>onAdd(count)}> Agregar al carrito</button>
      </div>
    </div>
  )
  
}

export default ItemCount
