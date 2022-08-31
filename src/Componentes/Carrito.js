import {useState} from 'react'



function Carrito  ()  {
let {cart, useCart} = useState ([])

    return (
        
        <div>
        <h1>This is the cart</h1>
        <div className="items">
          {map(this.props.cartProducts, (product) => {
            <h1>{product.name}</h1>
          })}
        </div>
      </div>
    )
}

export default Carrito