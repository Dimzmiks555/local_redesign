import ArrowDownIcon from '@/icons/ArrowDownIcon'
import React, { useState } from 'react'
import s from './Menu.module.css'

const NestedLink = ({children, title}) => {

  const [isActive, setIsActive] = useState(false) 

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <li className={isActive ? s.nested_link_active : s.nested_link} onClick={handleClick}>
      <div className={s.plane}><p>{title}</p><ArrowDownIcon/></div>
      <ul>
        {children}
      </ul>
    </li>
  )
}

export default NestedLink