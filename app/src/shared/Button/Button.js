import React from 'react'
import s from './Button.module.css'

const Button = ({children, variant, ...props}) => {
  return (
    <button className={variant == "outlined" ? s.button_outlined : s.button} {...props}>{children}</button>
  )
}

export default Button