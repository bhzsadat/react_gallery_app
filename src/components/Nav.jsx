import { NavLink } from "react-router-dom";

// Navigation component
const Nav = (handleRouteChange) => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/cats" onClick={() => handleRouteChange('cats')}>Cats</NavLink></li>
                <li><NavLink to="/dogs" onClick={() => handleRouteChange('dogs')}>Dogs</NavLink></li>
                <li><NavLink to="/computers" onClick={() => handleRouteChange('computers')}>Computers</NavLink></li>
            </ul>
        </nav>

    )
}

export default Nav;