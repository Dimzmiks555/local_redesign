import ArrowDownIcon from '@/icons/ArrowDownIcon'
import React from 'react'
import s from './StatisticsControl.module.css'

const StatisticsControl = () => {
  return (
    <div className={s.control}>
        <h3>Статистика за <span>год <ArrowDownIcon/></span></h3>
    </div>
  )
}

export default StatisticsControl