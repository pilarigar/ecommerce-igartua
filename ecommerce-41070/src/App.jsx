
import {useEffect, lazy, Suspense } from 'react'

import Menu from './components/NavBar/NavBar'
import ItemsListContainer from './Containers/ItemsListContainer/ItemsListContainer'
//import ItemDetailConteiner from './Containers/ItemDetailContainer/ItemDetailCointainer'
import CartContainer from './Containers/CartContainer/CartContainer'
import CartContextProvider from './Context/CartContext'


import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

const ItemDetailContainer = lazy(() => import("./Containers/ItemDetailContainer/ItemDetailCointainer"))

function App() {
  return (

    <BrowserRouter>
      <CartContextProvider>
      <div className="App">
        <Menu/>
        <Routes> 
          <Route path="/" element={
          <ItemsListContainer greeting={"Bienvenidxs"}/>}/>

          <Route index path="/categoria/:categoriaId" element={<ItemsListContainer/>} />

          <Route path="/detalle/:itemId" element={
           <Suspense fallback={<div>Cargando...</div>}>
              <ItemDetailContainer/>
           </Suspense> 
          }/> 

          <Route path="/cart" element={<CartContainer/>}/>
          <Route path="*" element={<Navigate to="/" />} /> 
        </Routes>
      </div>

      </CartContextProvider>
      
    </BrowserRouter>
  )
}

export default App

  