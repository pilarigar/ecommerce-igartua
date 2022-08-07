import { useContext, useState, createContext } from "react";

const CartContex =  createContext ([])

export const useCartContex = () => useContext (CartContex)

const CartContexProvider = ({children}) => {
   
    // poner todos los estados y funciones
   const [cartList, setCartList] = useState ([])

   //Agregar producto al carrito
   const agregarAlCarrito = (objItem) => {
    setCartList ([
        ...cartList,
        objItem
    ])
   }

   //Boton Vaciar carrito
    const vaciarCarrito = () =>{
      setCartList([])
    } 

    // Precio total
    const Total = ()=>{
        return cartList.reduce((acumPrecio, prodItem) => acumPrecio = acumPrecio + (prodItem.price * prodItem.cantidad) , 0) 
    }

    const cantidadTotal = ()=>{
        return cartList.reduce((contador, produItem) => contador += produItem.cantidad , 0) 
    }

    // eliminar producto 
    const eliminarProducto = (id) => {
        setCartList( cartList.filter(eItem => eItem.id !== id ) )
    }


    return (
        <CartContex.Provider value={{
            cartList,
            agregarAlCarrito,
            vaciarCarrito,
            Total,
            cantidadTotal,
            eliminarProducto
        }}>
            {children}
        </CartContex.Provider>
    )
}

export default CartContexProvider