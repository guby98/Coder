import {React, useState, useEffect} from 'react';
import { getSingleItemFromAPI } from "../../services/firebase";
import '../ItemDetailContainer/itemdetail.css'
import {useParams} from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import ItemDetail from '../ItemDetailContainer/ItemDetail';

function ItemDetailContainer(props) {
    const [product, setProduct] = useState([]);
    const [ loading, setLoading] = useState(true);

    let id = useParams().id;

    useEffect(() => {
      getSingleItemFromAPI(id)
        .then((itemsDB) => {
          setProduct(itemsDB);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <Loader color = 'black' size = {250} lineWeight= {4}/>;

    
  let stylePrice = {color : product.discount? 'green' : 'inherit'};

    return ( <ItemDetail  product= {product}  />)
};

export default ItemDetailContainer;

