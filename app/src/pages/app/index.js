import Layout from '@/components/Layout/Layout'
import DefectsChart from '@/modules/DefectsChart/DefectsChart'
import ProducedChart from '@/modules/ProducedChart/ProducedChart'
import React from 'react'
import s from '../../styles/App.module.css'

const MainPage = () => {
  return (
    <Layout title="Главная">
      <div className={s.grid}>
        <div className={s.chart}>
          <ProducedChart/>
        </div>
        <div className={s.chart}>
          <DefectsChart/>
        </div>
        <div>

        </div>
        <div>

        </div>
        <div>

        </div>
      </div>
    </Layout>
  )
}

export default MainPage