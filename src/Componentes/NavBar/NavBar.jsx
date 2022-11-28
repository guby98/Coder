import './navbar.css'
import Nav from 'react-bootstrap/Nav';
import CartW from '../CartWidget/CartWidget.jsx'
import { Link } from 'react-router-dom';

function NavBar() {

   return (
        <div className='nav-head'>

           <Nav className="justify-content-evenly nav-center " >
          
          <Link className='none' to = '/' ><h5 > Shop </h5></Link>
          
         
          <Link className='none' to = '/category/bmw'><h5 > BMW </h5></Link>
        
        
          <Link className='none'  to = '/category/honda'  ><h5 > HONDA </h5></Link>


          <Link className='none'  to = '/category/kawasaki'  ><h5 > KAWASAKI </h5></Link>
        
        
          <Link  className='none'to = '/cart'  >
          <h5  to='/landing'>Cart</h5>
          </Link>
        
        <CartW />
      </Nav>
     
        </div>
    );
};

export default NavBar;