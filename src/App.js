import NavBar from './Componentes/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route 
          path = '/' 
          element = {<ItemListContainer />} />
          <Route 
          path = '/category/:categoryid' 
          element = {<ItemListContainer />} />
          <Route 
          path = '/detalle/:id' 
          element = {<ItemDetailContainer />} />
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
