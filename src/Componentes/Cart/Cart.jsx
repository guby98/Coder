import React, {useContext} from 'react';
import cartContext from '../Context/CartContext';

import Button from '../Button/Button';
import { createBuyOrderFirestoreWithStock } from '../../services/firebase';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import BuyForm from './BuyForm';
import '../../App.css'



function Cart() {
    const  { cart, removeItem, totalItemsInCart, clear, totalPrice } = useContext(cartContext);
    const navigate = useNavigate();

    if (cart.length === 0) return  <h2 className='emptyCart'>Ups, tu carrito está vacío, quizás querías ir a la <Link to='/' className='linkDetail'>  tienda? </Link> </h2> ;

 async function createBuyOrder(userData) {
      const buyData = {
        buyer : userData,
        items: cart,
        total: totalPrice(),
        date : new Date()
      }

    createBuyOrderFirestoreWithStock(buyData).then(orderId => {
      console.log(orderId);
      clear(orderId);
      

      Swal.fire({   
        showCancelButton: true,  
        title : 'Gracias por tu compra!',
        text: `El identificador de tu órden es ${orderId}`,
        icon: 'success',
        confirmButtonText: 'Ir a la tienda',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      } else if (result.isDismissed) {
        Swal.fire('Gracias por elegirnos!');
      }
    })
  })
};

  return (
    <div>
        <h4 className='carth4'>Contenido de tu carrito</h4>
    
        {cart.map (cartItem => (
          <div className='mapContent' key = {cartItem.id}>
            <table bgcolor='wheat'>
              <tbody>
              <tr >
                <th>Imágen</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Id de la compra</th>
                <th>Total a pagar</th>
                <th>Completa el formulario para llevar tu producto!</th>
                <th>Remover Item</th>
                <th>Limpiar carrito</th>
                
              </tr>

              <tr bgcolor = 'wheat'>
              
              <td className='tableData'><img style= {{width: '200px', height: '150px'}} src={cartItem.thumbnail} alt = {cartItem.title}  /></td>
              <td className='tableData'> {cartItem.title}</td>
              <td className='tableData'> $: {cartItem.count * cartItem.price}</td>
              <td className='tableData'> {cartItem.count}</td>
              <td className='tableData'>  {cartItem.id}</td>
              <td className='tableData'>$: {totalPrice()}</td>
              <td className='tableData' > <BuyForm onSubmit = {createBuyOrder}/></td>
              <td onClick = {() => removeItem(cartItem.id)} className='tableData'> <Button>Remover </Button></td>
              <td className='tableData'><Button onClick={clear}>Limpiar</Button></td>
              
              <td className='tableData'>{totalItemsInCart}</td>
              </tr>
              </tbody>
            </table>
            <hr />
              
            </div>

            
        ))}
        
        
        

    </div>
  )
}

export default Cart