// import '../styles.css';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import Logo from '../../Assets/logo.png';

export default function Nav() {

    return (
        <div className="nav-wrapper">
                <img className='nav-logo' src={Logo} alt="Little Lemon logo" />
            <nav>
                {<NavLinks />}
            </nav>
            <Link to="/login" className="login-btn">Login</Link>
        </div>

    );
}