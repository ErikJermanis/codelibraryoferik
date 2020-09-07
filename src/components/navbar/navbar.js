import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as MercLogoBlack } from './MlogoBlack.svg';
import { ReactComponent as MercLogoWhite } from './MlogoWhite.svg';
import { NavItemWDrop, DropdownMenu, DropdownItem } from '../navItemWDrop/navItemWDrop';
import './navbar.scss';

const Navbar = () => {
  return(
    <nav className="navWrapper">
      <Link to="/">
        <MercLogoWhite className="navLogo" />
      </Link>
      <div className="verticalDivider" />
      <h1 className="navH1">React Component Library</h1>

      <NavItemWDrop label="Layouts">
        <DropdownMenu>
          <DropdownItem goToPage="/">Shopify grid example 1</DropdownItem>
          <DropdownItem goToPage="/">Paška</DropdownItem>
          <DropdownItem goToPage="/">Baška</DropdownItem>
        </DropdownMenu>
      </NavItemWDrop>

      <NavItemWDrop label="Components">
        <DropdownMenu>
          <DropdownItem goToPage="/">test</DropdownItem>
          <DropdownItem goToPage="/">test</DropdownItem>
          <DropdownItem goToPage="/">test</DropdownItem>
          <DropdownItem goToPage="/">test</DropdownItem>
          <DropdownItem goToPage="/">test</DropdownItem>
          <DropdownItem goToPage="/">test</DropdownItem>
        </DropdownMenu>
      </NavItemWDrop>

      <div className="verticalDivider" />
      <button className="anchorLikeButton">Dark theme</button>
    </nav>
  )
}

export default Navbar;