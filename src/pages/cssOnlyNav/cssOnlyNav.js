import React from 'react';
import './cssOnlyNav.scss';

const CssOnlyNav = () => {
  return(
    <div className="cssOnlyNav-wrapper">
      <div className="cssOnlyNav-nav">
        <ul className="cssOnlyNav-ul1">
          <li className="cssOnlyNav-li1"><a className="cssOnlyNav-a">Placeholder</a></li>
          <li id="clickable" className="cssOnlyNav-li1">
            <a href="#" className="cssOnlyNav-a">Click me</a>
            <ul id="turnon" className="cssOnlyNav-dropUl">
              <li className="cssOnlyNav-dropLi"><a href='#'>Lorem</a></li>
              <li className="cssOnlyNav-dropLi"><a href='#'>Ipsum</a></li>
            </ul>
          </li>
          <li className="cssOnlyNav-li1"><a  className="cssOnlyNav-a">Quratz</a></li>
        </ul>
      </div>
    </div>
  )
}

export default CssOnlyNav;