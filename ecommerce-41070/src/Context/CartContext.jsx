import { useContext, useState, createContext } from "react";

const CartContex =  createContext ([])

export const useCartContex = () => useContext (CartContex)

const CartContexProvider = ({children}) => {
   
    // poner todos los estados y funciones
   const [cartList, setCartList] = useState ([])

   //Agregar producto al carrito
   const AddToCart = (objItem) => {
    setCartList ([
        ...cartList,
        objItem
    ])
   }

   //Boton Vaciar carrito
    const EmptyCart = () =>{
      setCartList([])
    } 

    // Precio total
    const Total = ()=>{
        return cartList.reduce((acumPrice, prodItem) => acumPrice = acumPrice + (prodItem.price * prodItem.quantity) , 0) 
    }

    const TotalQuantity = ()=>{
        return cartList.reduce((count, produItem) => count += produItem.quantity , 0) 
    }

    // eliminar producto 
    const DeleteItem = (id) => {
        setCartList( cartList.filter(eItem => eItem.id !== id ) )
    }


    return (
        <CartContex.Provider value={{
            cartList,
            AddToCart,
            EmptyCart,
            Total,
            TotalQuantity,
            DeleteItem
        }}>
            {children}
        </CartContex.Provider>
    )
}

export default CartContexProvider