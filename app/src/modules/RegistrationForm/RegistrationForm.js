import Button from '@/shared/Button/Button'
import Textfield from '@/shared/Textfield/Textfield'
import React from 'react'
import s from './RegistrationForm.module.css'

const RegistrationForm = () => {
  return (
    <div className={s.registrationForm}>
        <h2>Регистрация в системе</h2>
        <form>
            <Textfield placeholder="Логин"/>
            <Textfield placeholder="Пароль"/>
            <Button>Зарегистрироваться</Button>
        </form>
    </div>
  )
}

export default RegistrationForm