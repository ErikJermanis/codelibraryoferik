import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as MercLogoWhite } from './MlogoWhite.svg';
import { ReactComponent as ChevronRight } from './chevronRight.svg';
import { ReactComponent as ChevronLeft } from './chevronLeft.svg';
import { NavItemWDrop, DropdownMenu, DropdownItem } from '../navItemWDrop/navItemWDrop';
import './navbar.scss';
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import { setActiveMenu, setMenuHeight } from '../../redux/navigation/navActions';

const Navbar = (props) => {

  const calcHeight = el => {
    const height = el.offsetHeight;
    props.setMenuHeight(1, height)
  };

  return(
    <nav className="navWrapper">
      <Link to="/">
        <MercLogoWhite className="navLogo" />
      </Link>
      <div className="verticalDivider" />
      <h1 className="navH1">React Component Library</h1>

      <NavItemWDrop idx="1" label="Layouts">
        <CSSTransition
          in={props.activeMenu1 === 'main'}
          unmountOnExit
          timeout={300}
          onEnter={calcHeight}
          classNames="menu-primary"
        >
          <DropdownMenu>
            <DropdownItem goToPage="/form1">Input form 1</DropdownItem>
            <DropdownItem idx="1" goToMenu="TML-2" rightIcon={<ChevronRight className="chevronIcon" />}>Test multi level</DropdownItem>
          </DropdownMenu>
        </CSSTransition>
        <CSSTransition
          in={props.activeMenu1 === 'TML-2'}
          unmountOnExit
          timeout={300}
          onEnter={calcHeight}
          classNames="menu-secondary"
        >
          <DropdownMenu>
            <DropdownItem idx="1" goToMenu="main" leftIcon={<ChevronLeft className="chevronIcon" />}>Back</DropdownItem>
            <DropdownItem goToPage="/">Test multi level</DropdownItem>
            <DropdownItem goToPage="/">Test multi level 2</DropdownItem>
          </DropdownMenu>
        </CSSTransition>
      </NavItemWDrop>

      <NavItemWDrop idx="2" label="Components">
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

const mapStateToProps = state => ({
  activeMenu1: state.nav.activeMenu1,
  activeMenu2: state.nav.activeMenu2
});

const mapDispatchToProps = dispatch => ({
  setMenuHeight: (idx, height) => dispatch(setMenuHeight(idx, height))
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);