import logo from './../../assets/images/logo.png';
import './Header.css'

function Header() {
    return (
        <div className='Header'>
            <img src={logo} className="logo" alt="SportSee logo"></img>
            <nav className="navbar">
                <ul className='navbarUL'>
                    <li className='navbarLI'><a href="#noUse" className='navLink'>Accueil</a></li>
                    <li className='navbarLI'><a href="#noUse" className='navLink'>Profile</a></li>
                    <li className='navbarLI'><a href="#noUse" className='navLink'>Réglage</a></li>
                    <li className='navbarLI'><a href="#noUse" className='navLink'>Communauté</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;