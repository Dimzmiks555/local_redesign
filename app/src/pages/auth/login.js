import LoginForm from '@/modules/LoginForm/LoginForm'
import Sublink from '@/shared/Sublink/Sublink'
import Link from 'next/link'
import React from 'react'
import s from '../../styles/LoginPage.module.css'

const LoginPage = () => {
  return (
    <div className={s.loginPage}>
        <div className={s.illustration}>
            <img src="/loginPage.png"></img>
        </div>
        <div className={s.form}>
            <Sublink><Link href="/">Назад</Link></Sublink>
            <LoginForm/>
        </div>
    </div>
  )
}

export default LoginPage