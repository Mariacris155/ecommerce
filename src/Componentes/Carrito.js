
import {useEffect, useState} from 'react'



function Carrito({id}) {
    let [enCarrito, setEnCarrito] =useState ([])
    let [loading, setLoading] =useState ()

    useEffect( () => {
        setLoading(true)
         fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(datos=>{
            datos.items = 1
            setEnCarrito(datos)})
        setLoading(false)
         }, [id])

// Obtener productos por ID `https://fakestoreapi.com/products/${ID}`
if (agregar !== "") {
    setLoading(true)
    fetch(`https://fakestoreapi.com/products/${agregar}`).then(res => res.json()).then(datos => {
      datos.items = 1 
      let agregados = enCarrito.find((productoAgregado) => (productoAgregado.id === datos.id))
      if (agregados) { 
        setEnCarrito(
          enCarrito.map((productoAgregado) => {
            if (productoAgregado.id === datos.id) {
              return { ...enCarrito, items: enCarrito.items + 1 }
            } else { return productoAgregado }
          })
        )
      } else {
        setEnCarrito([...enCarrito, datos])
      }
    })
  }
  setSuma(articulosCarrito())
  setAgregar("")
  setLoading(false)
} 
   
 
    return (
        <>
<div className='listaCarrito'></div>

        </>
    )
     
    }
 
 export default Carrito

   