import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"
import { useCartContex } from "../../Context/CartContext"

const CartContainer = () => {
  const {cartList, EmptyCart, DeleteItem, Total, TotalQuantity} = useCartContex ()
  
  const generateOrder = async () => {
  // generando la orden
    const order = {}
    order.buyer = {name: 'pilar', phone:'123456789', email: 'piligartua@gmail.com'}

    order.items = cartList.map(product => {
      return {
        id: product.id,
        name: product.name,
        price: product.price
      }
    })
       
    order.total = Total()
      
    const db = getFirestore()
    const queryOrders = collection(db, 'orders')
    addDoc(queryOrders, order)
    .then (resp => Swal.fire('tu ID de orden es:' + "" + (resp.id)))
    .catch(err => console.log(err))
  
    // actualizar el stock
    const queryCollectionStock = collection(db, 'items')

    const queryUpdateStock = query(
      queryCollectionStock,                 
      where( documentId() , 'in', cartList.map(prod => prod.id) )      
    )

    const batch = writeBatch(db)

    await getDocs(queryUpdateStock)
    .then(resp => console.log(resp))
    .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
          stock: res.data().stock - cartList.find(item => item.id === res.id).quantity
    })))
    .catch(err => console.log(err))
    .finally(()=> EmptyCart())

    batch.commit()

  }
    
    
  return (
      
    <div className="container">
      <table className="table table-bordered">
        <thead>
          <tr>
          <th scope="col"></th>
          <th scope="col">Cantidad</th>
          <th scope="col">Item</th>
          <th scope="col">Precio</th>
          <th scope="col">Eliminar <br/> producto</th>
          </tr>
        </thead>
        <tbody>
          {cartList.map(item => 
            <> 
              <tr>
                <th><img src={item.image} alt="image"/></th> 
                <td style={{fontWeight:"bold"}}>{item.quantity}</td>                          
                <td style={{fontWeight:"bold"}}>{item.name} </td>
                <td style={{fontWeight:"bold"}} >${item.price}</td>  
                <td><button style={{color:"black"}}className="btn btn-dark" onClick={() => DeleteItem (item.id)}> X </button></td> 
              </tr>
            </>
          )} 
          <tr>
            <td style={{color:"white", fontWeight:"bold", backgroundColor:"#17202A"}}>Total de productos</td>
            <td style={{color:"white", fontWeight:"bold", backgroundColor:"#17202A"}}>{TotalQuantity()}</td>
            <td style={{color:"white", fontWeight:"bold", backgroundColor:"#17202A"}}>Precio final de compra</td>
            <td style={{color:"white", fontWeight:"bold", backgroundColor:"#17202A"}}>${Total()}</td>
          </tr>
          
        </tbody>
      </table> 
      <button style={{margin:"10px"}} className="btn btn-dark" onClick={EmptyCart}>Vaciar carrito</button>

      <form className="border border-2 border-dark rounded shadow-lg w-75 p-3" style={{margin: 'auto'}}  >
        <div className="form-group">
          <label htmlFor="">Nombre</label>
          <input 
              type="text" 
              className="form-control" 
              name="name" 
              placeholder="Nombre" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Teléfono</label>
          <input 
            type="text" 
            className="form-control" 
            name="phone" 
            placeholder="Teléfono" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input 
            type="text"
            className="form-control" 
            name="email" 
            placeholder="Email" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Validar Email</label>
          <input 
            type="text"
            className="form-control" 
            name="validarEmail" 
            placeholder="Repita Email" 
          />
        </div>
        <button id="orderbtn" type="button" className="btn btn-dark mt-2" onClick={generateOrder}>Generar orden</button>
      </form>
    </div>
     
  )
}
  
export default CartContainer