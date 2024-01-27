import React, { useState } from 'react'
import s from './Profile.module.css'

const Profile = () => {

    const [isActive, setIsActive] = useState(false) 

    const handleClick = () => {
      setIsActive(!isActive)
    }

  return (
    <div className={isActive ? s.wrapper_active : s.wrapper} onClick={handleClick}>
        <div className={s.profile}>
            <div className={s.icon}>
                АН
            </div>
            <div>
                <p className={s.text}>Афанасьев Николай</p>
                <p className={s.subtext}>Оператор</p>
            </div>
        </div>
        <div className={s.list}>
            <div className={s.list_item}>
                Редактировать
            </div>
            <div className={s.list_item}>
                Выйти
            </div>
        </div>
    </div>
  )
}

export default Profile