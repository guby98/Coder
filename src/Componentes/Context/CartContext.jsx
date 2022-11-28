import { useState, createContext } from "react"


 const cartContext = createContext();

    export  function CartContextProvider(props) {
    let [cart, setCart] = useState([]);
    

    function addToCart(itemData) {
        let itemRepetido = cart.find((itemInCart) => itemInCart.id === itemData.id);
    
        if (itemRepetido) {
            let newCart = cart.map((itemInCart) => {
                if (itemInCart.id === itemData.id) {
                    itemInCart.count += itemData.count;
                    return itemInCart;
                } else {
                    return itemInCart;
                }
            });

            setCart(newCart);

        } else {
            const newCart = [...cart];
            newCart.push(itemData);
            setCart(newCart);
        };
       
    }


    function totalItemsInCart() {
        let total = 0;
        cart.forEach((itemInCart) => {
          total = total + itemInCart.count;
        });
        return total;
      }

      function removeItem(itemId){
        let newCarrito = cart.filter( (item) => item.id !== itemId)
        setCart(newCarrito);
        }

    function clear() {
      const newCart = [];
      setCart(newCart);
    };

    function totalPrice(){
     let totalPrice= 0;
        cart.forEach((itemInCart) => {
            totalPrice = totalPrice + itemInCart.count * itemInCart.price;
        });

        return totalPrice;
    }

    const value = { 
        cart,
        addToCart,
        totalItemsInCart,
        clear,
        removeItem,
        totalPrice
    };


    return(

        <cartContext.Provider value= {value}>
          {props.children}
          </cartContext.Provider>
    );
};

export default cartContext;