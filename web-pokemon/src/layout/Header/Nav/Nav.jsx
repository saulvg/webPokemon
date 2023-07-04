import './nav.css'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav id='main-nav'>
            <ul>
                <li>
                    <Link to='/' className='link'>Home</Link>
                </li>
                <li>
                    <Link to='/products' className='link link-products'></Link>
                </li>

                <li id='animals'>
                    <Link to='/animals' className='link link-animals'></Link>
                </li>
                <li>
                    <Link to='/vehicles' className='link link-vehicles'></Link>
                </li>
                <li>
                    <Link to='/about' className='link'>About us</Link>
                </li>
                <li>
                    <Link to='/contact' className='link '>Contact</Link>
                </li>
                <li>
                    <Link to='/not-found' className='link link-'>{'(NotFound)'}</Link>
                </li>
            </ul>
        </nav>
    );
};