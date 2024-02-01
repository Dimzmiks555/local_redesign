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
                { x: "80%", y: 80, label: "80%", fill: 'tomato' },
                { x: "5%", y: 5, label: "5%" },
                { x: "5%", y: 5, label: "5%" },
                { x: "5%", y: 5, label: "5%" },
                { x: "5%", y: 5, label: "5%" },
            ]}
        />
        <div>
        <VictoryLegend x={0} y={20}
            title="Топ дефектов"
            orientation="vertical"
            gutter={100}
            style={{ title: {fontSize: 22, fontWeight: 500, fontFamily: 'Onest' }, labels: {fontSize: 20, fontFamily: 'Onest'} }}
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