import Card from 'react-bootstrap/Card';
import '../Item/item.css'
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

function Item({product}) {

  let urlDetail = `/detalle/${product.id}`;

  return (
    <Card style={{ width: '18rem', height: '30rem', marginTop:'1rem' }}>
      <Card.Body className='card-body'>
        <img alt= 'product' className='card-img' src = {product.thumbnail} />
        <Card.Title >{product.title}</Card.Title>
        
        <Card.Text className='card-body-inside'>
          {product.description}
        </Card.Text>
        <Card.Text className='card-body-inside'>
          {product.price}
        </Card.Text >
        <Link to = {urlDetail}>
        <Button color = 'blue' className='card-body-inside'>Ver en detalle!</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Item;