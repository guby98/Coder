import {useState} from 'react';
import Button from '../Button/Button';
import '../ItemCount/itemcount.css'

export default function ItemCount({stock, onAddToCart,text}) {
    const [count, setCount] = useState(1);

    function addProduct() {
        if (count < stock) setCount(count + 1);
       
    }

    function sustractProduct() {
        
        if (count > 1) setCount( count - 1);
    }

    return (
        <div className='count-container'>
            <div className='count-control'>
                <Button estilo= 'button-resta' onClick = {sustractProduct}>-</Button>
                    <span>{count}</span>
                <Button estilo= 'button-suma' onClick= {addProduct}>+</Button>
            </div>
            <div className='count-buttons'>
                    <Button estilo = 'addbtn' onClick= { () => onAddToCart(count)} >{text}</Button>
            </div>
        </div>
    )
}