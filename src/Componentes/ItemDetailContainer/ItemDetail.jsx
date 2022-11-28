import {React, useState, useContext} from 'react';
import Card from 'react-bootstrap/Card';
import '../../App.css'
import ItemCount from '../ItemCount/ItemCount';
import Button from '../Button/Button';
import {Link} from 'react-router-dom';
import cartContext from '../Context/CartContext';

function ItemDetail({ product }, props) {
    
    const [isInCart, setIsInCart] = useState(false);
    
    const { addToCart, cart } = useContext(cartContext);
    
    let itemInCart = cart.find(item => product.id === item.id);
    let stock = product.stock;
    if (itemInCart) stock -= itemInCart.count;

    function onAddToCart(count) {
      console.log(`Added ${count} units of ${product.title}`);
      const itemForCart = {...product, count };
        addToCart(itemForCart);
        setIsInCart(true);
  }

    return ( <> {isInCart ? <Link to = '/cart'><h4 className='viewheight'>Ir al carrito!</h4> </Link> : 
     <div className='App alignDetail' id = {props.id}> 
      <Card className='border-card' style={{ width: '18rem', height: '30rem', marginTop:'1rem', borderRadius: '1.8rem' }}>
      <Card.Body className='card-body'>
      <img alt= 'product' className='card-img-detail' src = {product.thumbnail} />
      <Card.Title>{product.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted ">{product.subtitle}</Card.Subtitle>
      <Card.Text>
        {product.description}
      </Card.Text>
      <Card.Text>
        
        
      </Card.Text>
      { isInCart ? (
     <> 
      
      <Link to='/cart' >   
      <Button > Ir al carrito!
      </Button> 
      </Link>
     
     </>  
     
     ) 
     : 
     ( <ItemCount stock = {stock} onAddToCart = {onAddToCart} text = 'Agregar al carrito!'/> )}
      
    </Card.Body>
  </Card>
  </div> } </>)
};

export default ItemDetail;