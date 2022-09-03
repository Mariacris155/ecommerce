import {useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



function Categoriastec({setId})  {
    let [categorias, setCategorias] =useState ([])
    let [loading, setLoading] =useState ()

 useEffect( () => {
setLoading(true)
 fetch('https://fakestoreapi.com/products/category/electronics')
.then(res=>res.json())
.then(datos=>{setCategorias(datos)})
setLoading(false)
 }, [])


if (loading) {
    return <h1>Cargando...</h1>
} else {

    return (
        <div className='catalogo'>
            {categorias.map((producto, index) => {
                return (
                    <Card key={index} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={producto.image} />
                        <Card.Body>
                            <Card.Title>{producto.title}</Card.Title>
                            <Card.Text>
                                {producto.category}
                            </Card.Text>
                            <Card.Text>
                                {producto.description}
                            </Card.Text>
                            <Card.Text>
                                {producto.price}
                            </Card.Text>

                            <Button variant="success" onClick={(e) => setId(e.target.value)} value={producto.id}>Añadir</Button>
                        </Card.Body>
                    </Card>
                )
            })}

        </div>
    );
}
}

export default Categoriastec;