import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as MercLogoWhite } from './MlogoWhite.svg';
import { ReactComponent as ChevronRight } from './chevronRight.svg';
import { ReactComponent as ChevronLeft } from './chevronLeft.svg';
import { NavItemWDrop, DropdownMenu, DropdownItem } from '../navItemWDrop/navItemWDrop';
import './navbar.scss';
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import { setCurrentPage, setMenuHeight } from '../../redux/navigation/navActions';

const Navbar = (props) => {

  const calcHeight = el => {
    const height = el.offsetHeight;
    props.setMenuHeight(1, height)
  };

  return(
    <nav className="navWrapper">
      <Link to="/" onClick={() => props.setCurrentPage('React Component Library')}>
        <MercLogoWhite className="navLogo" />
      </Link>
      <div className="verticalDivider" />
      <h1 className="navH1">{props.currentPage}</h1>

      <NavItemWDrop idx="1" label="Layouts">
        <DropdownMenu idx="1">
          <CSSTransition
            in={props.activeMenu1 === 'main'}
            unmountOnExit
            timeout={300}
            onEnter={calcHeight}
            classNames="menu-primary"
          >
            <div className="menu">
              <DropdownItem onClick={() => props.setCurrentPage('Input Form 1')} idx="1" goToPage="/form1">Input form 1</DropdownItem>
              <DropdownItem onClick={() => props.setCurrentPage('Dropdown navbar with css only')} idx="1" goToPage="/cssOnlyNav">Dropdown navbar with css only</DropdownItem>
              <DropdownItem onClick={() => props.setCurrentPage('Showcase cards 1')} idx="1" goToPage="/showcaseCards1">Showcase cards 1</DropdownItem>
              <DropdownItem idx="1" goToMenu="TML-2" rightIcon={<ChevronRight className="chevronIcon" />}>Test multi level</DropdownItem>
            </div>
          </CSSTransition>
          <CSSTransition
            in={props.activeMenu1 === 'TML-2'}
            unmountOnExit
            timeout={300}
            onEnter={calcHeight}
            classNames="menu-secondary"
          >
            <div className="menu">
              <DropdownItem idx="1" goToMenu="main" leftIcon={<ChevronLeft className="chevronIcon" />}>Back</DropdownItem>
              <DropdownItem idx="1" goToPage="/">Test multi level</DropdownItem>
              <DropdownItem idx="1" goToPage="/">Test multi level 2</DropdownItem>
            </div>
          </CSSTransition>
        </DropdownMenu>
      </NavItemWDrop>

      <NavItemWDrop idx="2" label="Components">
        <DropdownMenu idx="2">
          <DropdownItem idx="2" goToPage="/">test</DropdownItem>
          <DropdownItem idx="2" goToPage="/">test</DropdownItem>
          <DropdownItem idx="2" goToPage="/">test</DropdownItem>
          <DropdownItem idx="2" goToPage="/">test</DropdownItem>
          <DropdownItem idx="2" goToPage="/">test</DropdownItem>
          <DropdownItem idx="2" goToPage="/">test</DropdownItem>
        </DropdownMenu>
      </NavItemWDrop>

      <div className="verticalDivider" />
      <button className="anchorLikeButton">Dark theme</button>
    </nav>
  )
}

const mapStateToProps = state => ({
  activeMenu1: state.nav.activeMenu1,
  activeMenu2: state.nav.activeMenu2,
  currentPage: state.nav.currentPage
});

const mapDispatchToProps = dispatch => ({
  setMenuHeight: (idx, height) => dispatch(setMenuHeight(idx, height)),
  setCurrentPage: (page) => dispatch(setCurrentPage(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);