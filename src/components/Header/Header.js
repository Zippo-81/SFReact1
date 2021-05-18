import React from "react";
import logo from "../../img/logo.svg";
import "./Header.css";
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <header className="header">
            <div className="header__wrap wrap">
                    <div className="header__logo">
                        <NavLink to="/" className="header__logoLink">
                            <img src={logo} width="115" height="28" alt="Логотип сайта" />
                        </NavLink>
                    </div>
                    <div className="header__humburger humburger">
                        <span></span>
                    </div>
                    <div className="header__wrap--mobile">
                        <nav className="header__nav menu">
                            <ul className="menu__list">
                                <li className="menu__item">
                                    <NavLink to="/about" className="menu__link">О нас</NavLink>
                                </li>
                                <li className="menu__item">
                                    <NavLink to="#" className="menu__link">Условия</NavLink>
                                </li>
                                <li className="menu__item">
                                    <NavLink to="/faq" className="menu__link">Частые вопросы</NavLink>
                                </li>
                            </ul>
                        </nav>
                        <button className="header__auth">Войти</button>
                    </div>
                </div>
        </header>
    );
};

export default Header;