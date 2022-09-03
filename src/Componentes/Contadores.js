import  {useState} from 'react'


function Contador (){
    let [count, setCount] = useState(1);

    const disminuir = () => {
        setCount (count - 1)
    }

    const aumentar = () => {
        setCount (count + 1)

}

return (
    <div className='contador'>
        <button disabled={count <= 1} onClick={disminuir}>-</button>
        <span>{count}</span>
        <button disabled={count >= 1} onClick={aumentar}>+</button>
    </div>
)
}
export default Contador