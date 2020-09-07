import React, { useState } from 'react';
import './navItemWDrop.scss';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const DropdownItem = (props) => {
  return(
    props.goToMenu ?
    <a className="dropdownItem-a">
      <span className="dropdownItem-iconLeft">{props.leftIcon}</span>
      {props.children}
      <span className="dropdownItem-iconRight">{props.rightIcon}</span>
    </a>
    :
    <Link to={props.goToPage} className="dropdownItem-Link">{props.children}</Link>
  )
};

const DropdownMenu = (props) => {
  return(
    <div className="dropdownMenu-menu">
      {props.children}
    </div>
  )
};

const NavItemWDrop = (props) => {

  const [open, setOpen] = useState(false);

  return(
    <div className="relativePosition">
      <span className="navItemWDrop-span" onClick={() => setOpen(!open)}>{props.label}</span>
      {open && props.children}
    </div>
    
  )
};

export { NavItemWDrop, DropdownItem, DropdownMenu };