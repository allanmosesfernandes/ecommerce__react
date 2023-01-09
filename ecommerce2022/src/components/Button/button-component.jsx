import React from 'react'
import './button-styles.scss'
const ButtonComponent = ({children, buttonType, ...otherProps}) => {
  
  const buttonClasses = {
    google: "google-sign-in",
    inverted: "inverted",
    default: ""
  }


  return (
    <button className={`button-container ${buttonClasses[buttonType]}`} {...otherProps}>
      {children}
    </button>
  )
}

export default ButtonComponent