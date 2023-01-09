import './formStyles.scss';
import React from 'react'

const FormInput = ({label, ...otherProps}) => {


    
  return (
    <div className="group">
        <input {...otherProps} className="form-input" />
        {
          //==if label exists then render==//
          label && (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>)
        }
    </div>
  )
}

export default FormInput