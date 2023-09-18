import NavLinks from "../Navbar/NavLinks";
import Logo from '../../Assets/logo.png';

export default function Footer() {
    const navItems = ['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login'];
    const contactItems = ['Address', 'Phone Number', 'Email'];
    const socialItems = ['Facebook', 'Instagram', 'Twitter'];

    return (
        <div className="footerContainer">
            <footer className="footSections">
                <img className="footer-logo" src={Logo} alt="Little Lemon logo" />
                <div>
                    <section className="footer-section doormat">
                        <h3>Doormat Navigation</h3>
                        <ul>
                            {navItems.map((tab) => {
                                return <li><a href="">{tab}</a></li>
                            })}
                        </ul>
                    </section>
                    <section className="footer-section contact">
                        <h3>Contact</h3>
                        <ul>
                            {contactItems.map((cont) => {
                                return <li>{cont}</li>
                            })}
                        </ul>
                    </section>
                    <section className="footer-section social">
                        <h3>Social Media Links</h3>
                        <ul>
                            {socialItems.map((socials) => {
                                return <li><a href="">{socials}</a></li>
                            })}
                        </ul>
                    </section>
                </div>
            </footer>
        </div>
    );
}