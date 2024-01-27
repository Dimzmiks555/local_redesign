import RegistrationForm from '@/modules/RegistrationForm/RegistrationForm'
import Sublink from '@/shared/Sublink/Sublink'
import Link from 'next/link'
import React from 'react'
import s from '../../styles/RegistrationPage.module.css'

const RegistrationPage = () => {
  return (
    <div className={s.registrationPage}>
        <div className={s.illustration}>
            <img src="/registrationPage.png"></img>
        </div>
        <div className={s.form}>
            <Sublink><Link href="/">Назад</Link></Sublink>
            <RegistrationForm/>
        </div>
    </div>
  )
}

export default RegistrationPage