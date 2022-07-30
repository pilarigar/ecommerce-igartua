import { useCartContex } from "../../Context/CartContext"

const CartContainer = () => {
    const {cartList, vaciarCarrito} = useCartContex ()
    return (
      <div>
        {cartList.map (items => <li>
          {items.name} {items.price} {items.cantidad}
        </li>)}
        <button onClick={vaciarCarrito}>Vaciar carrito</button>
      </div>
    )
  }
  
  export default CartContainer