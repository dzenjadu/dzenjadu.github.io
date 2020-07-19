import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import MenuList from "../MenuList/MenuList";

const Header = () => {
    return(
        <header className="header">
            <Link to="/">
                <img src="/images/logo.png" className="header__logo" />
            </Link>
            <div className="header__menu">
                <MenuList />
            </div>
        </header>
    )
}

export default Header;