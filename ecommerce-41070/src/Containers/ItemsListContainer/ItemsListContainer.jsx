import {useState} from "react"

const ItemListContainer = ({ greeting }) => {
   
    const [ contador , actualizarContador ] = useState(1)
    
    const disminuir = () => {    
        actualizarContador(contador - 1) 
    }  

    const aumentar = () => {    
      actualizarContador(contador + 1) 
    }  
    
    console.log('item List Container rendered')
    
    return (
      <div>
        { greeting }<br></br>
        { contador } <br />
        <button onClick = {disminuir}>-</button>
        <button onClick={aumentar}>+</button>
      </div>
    )
  }
  
  export default ItemListContainer
  //<button onClick = {disminuir}>-</button>