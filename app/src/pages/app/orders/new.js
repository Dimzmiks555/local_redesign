import Layout from '@/components/Layout/Layout'
import OrderCreateForm from '@/modules/OrderCreateForm/OrderCreateForm'
import React from 'react'

const NewOrderPage = () => {
  return (
    <Layout title="Новый заказ">
      <OrderCreateForm/>
    </Layout>
  )
}

export default NewOrderPage