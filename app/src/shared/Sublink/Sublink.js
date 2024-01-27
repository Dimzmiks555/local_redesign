import React from 'react'
import s from './Sublink.module.css'

const Sublink = ({children}) => {
  return (
    <div className={s.sublink}>{children}</div>
  )
}

export default Sublink