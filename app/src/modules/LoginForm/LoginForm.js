import Button from '@/shared/Button/Button'
import Textfield from '@/shared/Textfield/Textfield'
import React from 'react'
import s from './LoginForm.module.css'

const LoginForm = () => {
  return (
    <div className={s.loginForm}>
        <h2>Вход в систему</h2>
        <form>
            <Textfield placeholder="Логин"/>
            <Textfield placeholder="Пароль"/>
            <Button>Войти</Button>
        </form>
    </div>
  )
}

export default LoginForm