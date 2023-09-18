import { Link } from 'react-router-dom';

export default function NavLinks() {
    const navItems = ['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login'];

    return (
        <ul className='nav-links'>
            <li><Link to="/" className="nav-item">{navItems[0]}</Link></li>
            <li><Link to="/about" className="nav-item">{navItems[1]}</Link></li>
            <li><Link to="/menu" className="nav-item">{navItems[2]}</Link></li>
            <li><Link to="/reservations" className="nav-item">{navItems[3]}</Link></li>
            <li><Link to="/order-online" className="nav-item order">{navItems[4]}</Link></li>
            {/* {navItems.map((tab) => {
            return <li><a href="" className="nav-item">{tab}</a></li>
            return <li><Link to="/{tab}" className="nav-item">{tab}</Link></li>
        })} */}
        </ul>
    );
}