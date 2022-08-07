import { useCartContex } from "../../Context/CartContext"

const CartContainer = () => {
    const {cartList, vaciarCarrito, eliminarProducto, Total} = useCartContex ()
    
    
    
    return (
      <div className="container">
        <table className="table table-bordered">
            <tr>
              <th scope="col"></th>
              <th scope="col">Item</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Eliminar <br /> producto</th>
            
            </tr>
            {cartList.map(item => 
              <> 
              <tr>
              <th><img src={item.image} alt="image"/></th>                           
              <td style={{fontWeight:"bold"}}>{item.name} </td>
              <td style={{fontWeight:"bold"}} >${item.price}</td>  
              <td style={{fontWeight:"bold"}}>{item.cantidad}</td> 
              <td><button style={{color:"black"}}className="btn btn-dark" onClick={() => eliminarProducto (item.id)}> X </button></td> 
              </tr>
              </>
            )}
          <tr><button style={{margin:"10px"}} className="btn btn-dark" onClick={vaciarCarrito}>Vaciar carrito</button></tr>
          
        </table> 
     </div>
    )
  }
  
  export default CartContainer