import React from 'react'
import { VictoryLegend, VictoryPie } from 'victory'
import s from './ProducedChart.module.css'

const ProducedChart = () => {
  return (
    <div className={s.chart}>
        <VictoryPie
        style={{labels: {fontSize: 16, fontFamily: 'Onest'}}}
        colorScale={[ "orange", "gold"]}
            data={[
                { x: "80%", y: 5, label: "80%", fill: 'tomato' },
                { x: "20%", y: 1, label: "20%" },
            ]}
        />
        <div>
        <VictoryLegend x={0} y={70}
            title="Всего произведено"s
            orientation="vertical"
            gutter={100}
            style={{ title: {fontSize: 28, fontWeight: 500, fontFamily: 'Onest' }, labels: {fontSize: 22, fontFamily: 'Onest'} }}
            data={[
                { name: "Без брака - 80%", symbol: { fill: "orange" } },
                { name: "С браком - 20%", symbol: { fill: "gold" } },
            ]}
        />
        </div>
    </div>
  )
}

export default ProducedChart