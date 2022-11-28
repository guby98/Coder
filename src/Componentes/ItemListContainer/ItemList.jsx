import React from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import Item from "../Item/Item";
import '../FlexWrapper/FlexWrapper.css'
import { Loader } from "../Loader/Loader";

function ItemList(props) {

  let arrayVacio = props.productsList.length === 0;

  return (
    <FlexWrapper>
      { arrayVacio ? ( <Loader color = 'black' size = {250} lineWeight= {4}/> ) :
     ( props.productsList.map((product) => (
        <Item key={product.id} product={product}  />
      )))}
      
    </FlexWrapper>
  );
}

export default ItemList;