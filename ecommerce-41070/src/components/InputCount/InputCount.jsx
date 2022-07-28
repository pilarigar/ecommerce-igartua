const InputCount= ()=> {

    return (
        <>
        <Link to='/cart' >
            <button  
                onClick={()=>console.log('ir a cart') } 
            >Ir al Cart o Terminar compra</button>
        </Link>
        <Link to='/' >
            <button 
                onClick={()=>console.log('ir al home') } 
            >Seguir comprando</button>
        </Link>
        </>
    )
}

export default InputCount