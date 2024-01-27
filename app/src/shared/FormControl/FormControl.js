import React from 'react'
import s from './FormControl.module.css'

const FormControl = ({children, label}) => {
  return (
    <div className={s.formControl}>
        <label>{label}</label>
        <div>{children}</div>
    </div>
  )
}

export default FormControl