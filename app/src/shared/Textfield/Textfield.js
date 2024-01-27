import React from 'react'
import s from './Textfield.module.css'

const Textfield = ({children, fullWidth, ...props}) => {

  let params = {}

  if (fullWidth) {params.width = '100%'}

  return (
    <input className={s.textfield} style={params} {...props}>{children}</input>
  )
}

export default Textfield