import orders from '@/mockups/orderList'
import React from 'react'
import { ArrowKeyStepper, Column, Table } from 'react-virtualized'

const OrderList = () => {




  return (
    <div>
        <ArrowKeyStepper columnCount={10} rowCount={10}>
            {({onSectionRendered, scrollToColumn, scrollToRow}) => (
            
            <Table
                width={1500}
                height={700}
                headerHeight={20}
                rowHeight={30}
                rowCount={orders.length}
                rowGetter={({index}) => orders[index]}>
                {console.log(scrollToRow)}
                <Column width={200} label="Дата" dataKey="date"  />
                <Column width={200} label="Заказ" dataKey="order" />
                <Column width={200} label="Заказчик" dataKey="buyer" />
                <Column width={200} label="План" dataKey="plan" />
                <Column width={200} label="Произведено" dataKey="fact" />
                <Column width={200} label="Кол-во дефектов" dataKey="defects" />
                <Column width={200} label="Статус" dataKey="status" />
            </Table>
            )}
        </ArrowKeyStepper>
    </div>
  )
}

export default OrderList