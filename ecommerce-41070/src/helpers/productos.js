const productos = [
    {id: 1, name: "Semillas de Chia", price: 100, stock:10, categoria: "semillas", image: "data:image/jpeg;base64,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" },
    {id: 2, name: "Almendras", price: 200, stock:20, categoria: "frutossecos", image:"data:image/jpeg;base64,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"},
    {id: 3, name: "Mantequilla de maní", price: 300, stock:30, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsA9J3G9Wf-yyBR-4QkcHMvTY4e1rkbdgFkiBySV0Qi8PgiIv9dH0s1ivqyElCYNdbUks&usqp=CAU"},
    {id: 4, name: "Aceite de oliva", price: 400, stock:40, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTExulU3N7bBD5kCnhsBE-pHTnzunIyLg1Xp0BcH-mAh8OMbBrRu1eIZvF0d24E9DBRpc4&usqp=CAU"},
]

export const getFetch = (id) => {
    
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (id) {
                resolve(productos.find( items => items.id === id ) )
            } else {
                resolve(productos)                
            }
        }, 2000)
    })
}