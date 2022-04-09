import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/porsche-logo@2x.png';

import './header.scss';

export const Header = () => {
    return (
        <header className="app-header">
            <a href="/" className="logo" aria-label='Logo'>
                <img src={Logo} alt="Porsche" />
            </a>

            <div className="menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/models">Models</Link></li>
                    <li><Link to="/">Descubra</Link></li>
                </ul>
            </div>
        </header>
    )
}
