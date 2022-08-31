import {useEffect, useState} from 'react'




function Categoriastec()  {
    let {datostec, setCategorias} =useState ({})
    let [loading, setLoading] =useState ()

 useEffect( () => {
setLoading(true)
 fetch('https://fakestoreapi.com/products/categoriy/electronics')
.then(res=>res.json())
.then(datostec=>setCategorias(datostec))
setLoading(false)
 }, [])


 if (loading) {
    return <h1>Cargando...</h1>
  } else {

    return (

        <div className='catalogo'>
        {datostec.map((category, index) => {
            return (
                <Card key={index} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={category.image} />
                            <Card.Body>
                                <Card.Title>{category.title}</Card.Title>
                                <Card.Text>
                                    {category.category}
                                </Card.Text>
                                <Card.Text>
                                    {category.description}
                                </Card.Text>
                                <Card.Text>
                                    {category.price}
                                </Card.Text>

                                <Button variant="success">Añadir</Button>
                            </Card.Body>
                        </Card>
            )
        })}

    </div>
    );
}
}

export default Categoriastec;