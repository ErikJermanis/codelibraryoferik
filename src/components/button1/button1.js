import React from 'react';
import './button1.scss';

const Button1 = ({ children, ...otherProps }) => {
  return(
    <button className="button1" {...otherProps}>{children}</button>
  )
};

export default Button1;