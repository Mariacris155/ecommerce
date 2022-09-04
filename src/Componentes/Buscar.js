import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Busqueda(setId) {
    let [data, setData] = useState ([])
    let [resultados, setResultados] = useState ([])
    let [texto, setTexto] = useState ("")
    let [loading, setLoading] =useState ()

    useEffect(() => {
        setLoading(true)
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(datos => { setData(datos) })
        setLoading(false)
    }, [])

   /*  function buscar(input) {
        let busqueda = []
        data.map((producto) => {
            if (producto.title.toLowerCase().includes(input.toLowerCase)) {
                busqueda.push(producto)
                setResultados(busqueda)
            }
        })}
 */

        function buscar (input) {
            setResultados(data.filter((item) => {return((item.title).toLowerCase()).includes(input)}))
        }


        return (
        
                <div className="App">
                    <div className="containerInput">
                        <input
                            className="form-control inputBuscar"
                            value={texto}
                            placeholder="Búsqueda"
                            onChange={(e) => {
                                setTexto(e.target.value)
                                buscar ((e.target.value).toLowerCase())
                            }}
                        />
                    
                    </div>
                    <div className='catalogo'>
                {resultados.map((producto, index) => {
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
                                    {producto.price}€
                                </Card.Text>

                                <Button variant="success" onClick={(e) => setId(e.target.value)} value={producto.id}>Añadir</Button>
                            </Card.Body>
                        </Card>
                    )
                })}

            </div>

                    </div>
                )
               
}


 export default Busqueda