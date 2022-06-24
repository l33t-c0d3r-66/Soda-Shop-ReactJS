import {Link} from 'react-router-dom'

import logo from '../../../assets/soda.png';
import cssClasses from './MainNavigation.module.css';

function MainNavigation () {
    return (
        <nav className={cssClasses.MainNavigation}>
            <div>
                <Link to="/">
                    <img src={logo} alt="Soda Store" className={cssClasses.Logo} /> 
                </Link>
                <ul className={cssClasses.NavLinks}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/add">Add Soda</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>

            </div>
        </nav>
    );
}

export default MainNavigation;