import {useState} from "react"
import ItemCount from "../../components/ItemCount/ItemCount"

const ItemListContainer = ({ greeting }) => {
   
  /*const [ contador , actualizarContador ] = useState(1)
    
  const disminuir = () => {    
   actualizarContador(contador - 1) 
  }  

  const aumentar = () => {    
    actualizarContador(contador + 1) 
  }  
    
  console.log('item List Container rendered')*/

  const onAdd = (quantity) => {
    console.log (quantity);
  }
    
  return (
    <>
      { greeting }<br></br>
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
    </>
  )
}
  
export default ItemListContainer
  
  
//{ contador } <br />
//<button onClick = {disminuir}>-</button>
//<button onClick={aumentar}>+</button>