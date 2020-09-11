import React, { useState } from 'react';
import './navItemWDrop.scss';
import { Link } from 'react-router-dom';
// import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { toggleNavItem, setActiveMenu } from '../../redux/navigation/navActions';

const mapDispatchToPropsDI = dispatch => ({
  setActiveMenu: (idx, menu) => dispatch(setActiveMenu(idx, menu))
})

export const DropdownItem = connect(null, mapDispatchToPropsDI)((props) => {
  return(
    props.goToMenu ?
    <a className="dropdownItem-a" onClick={() => props.setActiveMenu(props.idx, props.goToMenu)}>
      <span className="dropdownItem-iconLeft">{props.leftIcon}</span>
      {props.children}
      <span className="dropdownItem-iconRight">{props.rightIcon}</span>
    </a>
    :
    <Link to={props.goToPage} className="dropdownItem-Link">
      <span className="dropdownItem-iconLeft">{props.leftIcon}</span>
      {props.children}
      <span className="dropdownItem-iconRight">{props.rightIcon}</span>
    </Link>
  )
});

const mapStateToPropsDM = state => ({
  menuHeight1: state.nav.menuHeight1
})

export const DropdownMenu = connect(mapStateToPropsDM)((props) => {

  const [activeMenu, setActiveMenu] = useState('main');

  return(
    <div className="dropdownMenu-menu" style={{ height: props.menuHeight1 }}>
      {props.children}
    </div>
  )
});

const mapStateToPropsNID = state => ({
  open1: state.nav.item1,
  open2: state.nav.item2,
  menuHeight1: state.nav.menuHeight1
})

const mapDispatchToPropsNID = dispatch => ({
  toggleNavItem: (idx, action) => dispatch(toggleNavItem(idx, action))
})

export const NavItemWDrop = connect(mapStateToPropsNID, mapDispatchToPropsNID)((props) => {
  return(
    <div className="relativePosition">
      <span className="navItemWDrop-span" onClick={() => props.toggleNavItem(props.idx, !props[`open${props.idx}`])}>{props.label}</span>
      {props[`open${props.idx}`] && props.children}
    </div>
    
  )
});