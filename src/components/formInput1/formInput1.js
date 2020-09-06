import React from 'react';
import './formInput1.scss';

const FromInput1 = ({ handleChange, label, ...otherProps }) => {
  return(
    <div className="formInput1-group">
      <input className="formInput1-input" onChange={handleChange} {...otherProps} />
      {label ?
      <label className={`${otherProps.value.length ? 'shrink' : ''} formInput1-label`}>
        {label}
      </label>
      : null}
    </div>
  )
}

export default FromInput1;