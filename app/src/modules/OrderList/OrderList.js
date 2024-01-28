import Table from '@/components/Table/Table'
import orders from '@/mockups/orderList'
import { createColumnHelper, flexRender, getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import React, { useState } from 'react'
import s from './OrderList.module.css'

const OrderList = () => {



  const columns = [
    {key: 'date', title: 'Дата'},
    {key: 'order', title: 'Заказ'},
    {key: 'buyer', title: 'Заказчик'},
    {key: 'plan', title: 'План'},
    {key: 'fact', title: 'Факт'},
    {key: 'defects', title: 'Дефектов'},
    {key: 'status', title: 'Статус'},
  ]




  return (
    <div className={s.orderList}>
        <Table
          cols={columns}
          data={orders}
        />
    </div>
  )
}

export default OrderList