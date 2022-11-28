import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getItemsFromAPIByCategory, getItemsFromAPI } from "../../services/firebase";
import { useParams } from "react-router-dom";
import {Loader} from '../Loader/Loader.jsx'
import FlexWrapper from "../FlexWrapper/FlexWrapper";



function ItemListContainer() {
  const [productsList, setProductsList] = useState([]);
  const { categoryid } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (categoryid) {
      getItemsFromAPIByCategory(categoryid).then((itemsDB) => {
        setProductsList(itemsDB);
      })
      .finally( () => setIsLoading(false));
    } else {
      getItemsFromAPI().then((itemsDB) => {
        setProductsList(itemsDB);
      })
      .finally( () => setIsLoading(false));
    }
  }, [categoryid]);

  if (isLoading) 
  
  return (
    <FlexWrapper>
      <Loader color = 'black' size = {250} lineWeight= {4}/>
    </FlexWrapper>
    )

  return  <ItemList productsList={productsList} />;
}

export default ItemListContainer;