import './navbar.css'
import Nav from 'react-bootstrap/Nav';
import CartW from '../CartWidget/CartWidget.jsx'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className='nav-head'>
           <Nav className="justify-content-evenly nav-center " >
        
          <Link className='none' to = '/' ><h5 className='none'> Shop </h5></Link>
        
        
          <Link to = '/category/bmw'><h5 className='none'> BMW </h5></Link>
        
        
          <Link  to = '/category/honda'  ><h5 className='none'>HONDA</h5></Link>


          <Link  to = '/category/kawasaki'  ><h5 className='none'>KAWASAKI</h5></Link>
        
        
          {/* <Link   >
          <h5 className='none'>Un poco de mí! </h5>
          </Link> */}
        
        <CartW />
      </Nav>
     
        </div>
    );
};

export default NavBar;