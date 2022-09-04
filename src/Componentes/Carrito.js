
import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Carrito({ id, setId }) {
    let [enCarrito, setEnCarrito] = useState([])
    let [loading, setLoading] = useState()
    let [erase, setErase] = useState('');
    let [total, setTotal] = useState(0)



    useEffect(() => {
        if (id !== "") {
            setLoading(true)
            fetch(`https://fakestoreapi.com/products/${id}`)
                .then(res => res.json())
                .then(datos => {
                    datos.items = 1
                    if (datos !== "") {
                        let agregados = enCarrito.find((productoAgregado) => (productoAgregado.id === datos.id))
                        if (agregados) {
                            setEnCarrito(
                                enCarrito.map((productoAgregado) => {
                                    if (productoAgregado.id === datos.id) {
                                        return { ...agregados, items: agregados.items + 1 }
                                    } else { return productoAgregado }
                                })
                            )
                        } else {setEnCarrito([...enCarrito, datos])}
                        
                    }
                }).catch(err => alert(`${err}, intentalo en otro momento`))
            setLoading(false);
           

            setId("")

        }
    }, [id, enCarrito, erase])

    console.log(enCarrito)

    //Borrar
    useEffect(() => {
        if (erase !== "") {
            setEnCarrito(enCarrito.filter(items => items.id !== parseInt(erase)))
        }
        setErase("")
    }, [erase, enCarrito])



    //total
    useEffect(() => {
        let total = enCarrito.map((agregados) => agregados.price * agregados.items).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        setTotal(parseFloat(total).toFixed(2))
    }, [enCarrito])

    if (loading) {
        return <h1>Cargando...</h1>
    } else {

        return (

            <div className='listaCarrito'>
                {enCarrito.map((producto, index) => {
                    return (
                        <Card key={index} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={producto.image} />
                            <Card.Body>
                                <Card.Title>{producto.title}</Card.Title>
                                <Card.Text>
                                    {producto.price * producto.items}€
                                </Card.Text>
                                <Card.Text>
                                    {producto.items}uds
                                </Card.Text>

                                <Button variant="success" onClick={(e) => setErase(e.target.value)} value={producto.id}>Borrar</Button>
                            </Card.Body>
                        </Card>
                    )
                })}

                <div className='preciototal'>
                    <Card.Text>
                        <h1>{total}€</h1>
                    </Card.Text>
                    <Button as={Link} to="/formulario"variant="success">Comprar</Button>
                </div>
            </div>




        )
    }

}
export default Carrito

