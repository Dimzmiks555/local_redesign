import React from 'react'
import Menu from './components/Menu/Menu'
import Profile from './components/Profile/Profile'
import s from './Layout.module.css'

const Layout = ({children, title}) => {
  return (
    <div className={s.layout}>
        <aside>
            <img src="/logo192.png"></img>
            <h2>Локальный блок</h2>
            <Menu/>
        </aside>
        <main>
            <nav>
                <h2>{title}</h2>
                <Profile/>
            </nav>
            <div className={s.content}>
              {children}
            </div>
        </main>
    </div>
  )
}

export default Layout