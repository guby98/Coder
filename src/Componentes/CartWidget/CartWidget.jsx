import '../CartWidget/cartwidget.css'

import cartContext from '../Context/CartContext';
import { useContext } from 'react';
import {Link} from 'react-router-dom';
import '../../App.css'

function CartW() {

    const { totalItemsInCart } = useContext(cartContext);
    
    return (
     <div>
           <Link to = '/cart'>
           <i className="fa fa-shopping-cart" style={{fontSize:'25px', color: 'white'}}></i> </Link>
            
            <small>
            
                { (totalItemsInCart() > 0)? 
                <span className='counter'>  {totalItemsInCart()} </span> : <></> }
                
            </small>
              
    </div>
    );
};

export default CartW;