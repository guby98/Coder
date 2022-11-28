import NavBar from './Componentes/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer.jsx';
import {CartContextProvider} from './Componentes/Context/CartContext';
import Cart from './Componentes/Cart/Cart';
import DarkMode from './Componentes/DarkMode/DarkMode';
import {useState} from 'react';
import {Link} from 'react-router-dom';

function App() {

  const [color, setColor] = useState('day');

  function colorChanger() {
    setColor((atm) => atm === 'day' ? 'night' : 'day');
   };

  return (
  <div className="App" id={color}>
    <CartContextProvider className= 'margins'>
      <BrowserRouter>
      <NavBar/>
      <DarkMode 
           estilo = 'colors'
           
           onClick = {colorChanger}
           /> 
        <Routes>
          <Route 
          path = '/' 
          element = {<ItemListContainer />} />
          <Route 
          path = '/category/:categoryid' 
          element = {<ItemListContainer />} />
          <Route 
          path = '/detalle/:id' 
          element = {<ItemDetailContainer id= {color}/>} />
          <Route 
          path = '*' 
          element = { <h2 id={color} className= 'notFound'> 404 : ruta no encontrada. Quizás querías ir a la tienda? <Link className='notFoundLink'> Acá </Link> podés!  </h2>} />
          <Route 
          path='/cart'
          element = {<Cart />}
          />
          

        </Routes>
      </BrowserRouter>
    </CartContextProvider>
    
  </div>
  )
}

export default App;
