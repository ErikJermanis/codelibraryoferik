import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as MercLogoBlack } from './MlogoBlack.svg';
import { ReactComponent as MercLogoWhite } from './MlogoWhite.svg';
import './navbar.scss';

const Navbar = () => {
  return(
    <nav className="navWrapper">
      <Link to="/">
        <MercLogoWhite className="navLogo" />
      </Link>
      <div className="verticalDivider" />
      <h1 className="navH1">React Component Library</h1>
      <span className="navLinkSpan">Layouts</span>
      <span className="navLinkSpan">Components</span>
      <div className="verticalDivider" />
      <button className="anchorLikeButton">Dark theme</button>
    </nav>
  )
}

export default Navbar;