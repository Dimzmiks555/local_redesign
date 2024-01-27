import Layout from '@/components/Layout/Layout'
import OrderList from '@/modules/OrderList/OrderList'
import React from 'react'

const OrdersPage = () => {
  return (
    <Layout title="История заказов">
        <OrderList></OrderList>
    </Layout>
  )
}

export default OrdersPage