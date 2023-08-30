import { Link,NavLink} from 'react-router-dom';
import './Header.css';
import flipkart from '../assets/images/flipkart_logo.png';

export const Header = () => {
  return (
    <header>
      <Link to='/' className='logo'>
      <img src={flipkart} alt="" className='image'/>
      <span>F L I P K A R T</span>
      </Link>
      <nav className='navigation'>
          <NavLink to="/" className='link' end>Home</NavLink>
          <NavLink to="/cart" className='link'>Cart</NavLink>
      </nav>
      <Link to="/cart" className='items'>
        <span>Cart:2</span>
      </Link>
    </header>
  )
}
