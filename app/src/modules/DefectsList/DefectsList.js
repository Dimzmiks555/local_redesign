import Table from '@/components/Table/Table'
import React from 'react'
import defects from '@/mockups/defectsList'
import s from './DefectsList.module.css'

const DefectsList = () => {

    const columns = [
        {key: 'date', title: 'Дата'},
        {key: 'order', title: 'Заказ'},
        {key: 'inspection', title: 'Инспекция'},
        {key: 'value', title: 'Значение'},
      ]


  return (
    
    <div className={s.defectsList}>
        <div className={s.tableWrapper}>
            <Table
                data={defects}
                cols={columns}
            />
        </div>
        <div className={s.defectPreview}>
            <div className={s.header}>
                <h3>Заказ W23-4324-3213</h3>
                <p>2023.09.7 7:55:38</p>
            </div>
            <div className={s.image}>
                <img src='/defect.jpeg'/>
            </div>
            <div className={s.footer}>
                <table>
                    <tr>
                        <td>Инспекция</td>
                        <td>Высечка</td>
                    </tr>
                    <tr>
                        <td>Значение</td>
                        <td>21</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
  )
}

export default DefectsList