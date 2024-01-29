import React from 'react'
import { VictoryLegend, VictoryPie } from 'victory'
import s from './DefectsChart.module.css'

const DefectsChart = () => {
  return (
    <div className={s.chart}>
        <VictoryPie
        style={{labels: {fontSize: 16, fontFamily: 'Onest'}}}
        colorScale={[ "orange", "gold", "tomato", "green", "blue"]}
            data={[
                { x: "80%", y: 2, label: "80%", fill: 'tomato' },
                { x: "20%", y: 1, label: "20%" },
                { x: "20%", y: 1, label: "20%" },
                { x: "20%", y: 1, label: "20%" },
                { x: "20%", y: 1, label: "20%" },
            ]}
        />
        <div>
        <VictoryLegend x={0} y={80}
            title="Топ дефектов за указанный период"
            centerTitle
            orientation="vertical"
            gutter={100}
            style={{ title: {fontSize: 24, fontWeight: 500, fontFamily: 'Onest' }, labels: {fontSize: 22, fontFamily: 'Onest'} }}
            data={[
                { name: "Без брака - 80%", symbol: { fill: "orange" } },
                { name: "С браком - 20%", symbol: { fill: "gold" } },
                { name: "С браком - 20%", symbol: { fill: "gold" } },
                { name: "С браком - 20%", symbol: { fill: "gold" } },
                { name: "С браком - 20%", symbol: { fill: "gold" } },
            ]}
        />
        </div>
    </div>
  )
}

export default DefectsChart