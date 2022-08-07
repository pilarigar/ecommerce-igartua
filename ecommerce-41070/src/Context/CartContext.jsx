import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const CartContex =  createContext ([])

export const useCartContex = () => useContext (CartContex)

const CartContexProvider = ({children}) => {
   
    // poner todos los estados y funciones
   const [cartList, setCartList] = useState ([])

   const agregarAlCarrito = (objItem) => {
    setCartList ([
        ...cartList,
        objItem
    ])
   }

    return (
        <CartContex.Provider value={{
            cartList,
            agregarAlCarrito
        }}>
            {children}
        </CartContex.Provider>
    )
}

export default CartContexProvider