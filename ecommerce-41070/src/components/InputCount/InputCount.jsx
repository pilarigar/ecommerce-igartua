import {Link} from "react-router-dom"

const InputCount= ()=> {

    return (
        <>
        <Link to='/cart' >
            <button  
                onClick={()=>console.log('ir a cart') } 
            >Ir al carrito</button>
        </Link>
        <br/>
        <Link to='/' >
            <button 
                onClick={()=>console.log('ir al home') } 
            >Seguir comprando</button>
        </Link>
        </>
    )
}

export default InputCount