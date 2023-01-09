import './formStyles.scss';
import React from 'react'

const FormInput = ({label, ...otherProps}) => {
  return (
    <div className="group">
        <label>{label}</label>
        <input 
            {...otherProps}
        />
        
    </div>
  )
}

export default FormInput