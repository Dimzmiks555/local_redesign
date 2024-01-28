import Link from 'next/link'
import React from 'react'
import s from './Menu.module.css'
import NestedLink from './NestedLink'

const Menu = () => {

  return (
    <ul className={s.menu}>
      <Link href="/app/" className={s.link}><li>Главная</li></Link>
      <NestedLink title="Заказы">
        <Link href="/app/orders/new"><li className={s.link}>Новый заказ</li></Link>
        <Link href="/app/orders"><li className={s.link}>История заказов</li></Link>
      </NestedLink>
      <NestedLink title="Инспекция">
      <Link href="/app/inspection/cut"><li className={s.link}>Высечка</li></Link>
          <Link href="/app/inspection/glue"><li className={s.link}>Клей</li></Link>
          <Link href="/app/inspection/gap"><li className={s.link}>Зазор</li></Link>
      </NestedLink>
      <Link href="/app/defects"><li className={s.link}>Дефекты</li></Link>
    </ul>
  )
}

export default Menu