import {React, useState, useEffect} from 'react';
import { getSingleItemFromAPI} from '../Mock/MockService';
import Card from 'react-bootstrap/Card';
import Button from '../Button/Button';
import '../ItemDetailContainer/itemdetail.css'
import {useParams} from 'react-router-dom';

function ItemDetailContainer(props) {
    const [product, setProduct] = useState([]);

    let id = useParams().id;

    useEffect(() => {
      getSingleItemFromAPI(id).then((itemsDB) => {
            setProduct(itemsDB);
        });
    }, []);

    return <div className='detail-all'> 
      <Card style={{ width: '18rem', height: '30rem', marginTop:'1rem' }}>
      <Card.Body className='card-body'>
      <img alt= 'product' className='card-img' src = {product.thumbnail} />
      <Card.Title>{product.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted ">{product.subtitle}</Card.Subtitle>
      <Card.Text>
        {product.description}
      </Card.Text>
      <Card.Text>
        {product.price}
      </Card.Text>
      

      <Button color = 'blue' >Hola!</Button>
      {/* <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link> */}
    </Card.Body>
  </Card>
  </div>
};

export default ItemDetailContainer

