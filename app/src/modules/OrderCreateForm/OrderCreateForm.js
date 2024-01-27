import Button from '@/shared/Button/Button'
import FormControl from '@/shared/FormControl/FormControl'
import Textfield from '@/shared/Textfield/Textfield'
import React from 'react'
import s from './OrderCreateForm.module.css'

const OrderCreateForm = () => {
  return (
    <div className={s.form}>
        <FormControl label="Название заказа">
            <Textfield fullWidth placeholder="Название заказа"/>
        </FormControl>
        <FormControl label="Чертеж">
            <Textfield type="file"/>
        </FormControl>
        <h3>Параметры заказа</h3>
        <FormControl label="Целевое значение изделий в заказе, шт">
            <Textfield fullWidth />
        </FormControl>
        <FormControl label="Максимальное значение дефектов, %">
            <Textfield fullWidth />
        </FormControl>
        <h3>Параметры рецепта</h3>
        <FormControl label="Длина, мм">
            <Textfield fullWidth />
        </FormControl>
        <FormControl  label="Ширина, мм">
            <Textfield fullWidth/>
        </FormControl>
        <FormControl label="Расстояние между просечками, мм">
            <Textfield fullWidth/>
        </FormControl>
        <Button>Сохранить</Button>
    </div>
  )
}

export default OrderCreateForm