import React from 'react'
import { VictoryBar, VictoryChart, VictoryGroup, VictoryLegend, VictoryStack } from 'victory';
import s from './ProducedStatistics.module.css'

const ProducedStatistics = () => {

    const getBarData = () => {
        return [1, 2, 3, 4, 5].map(() => {
          return [
            { x: "Январь", y: Math.random() },
            { x: "Февраль", y: Math.random() },
            { x: "Март", y: Math.random() },
            { x: "Апрель", y: Math.random() },
            { x: "Май", y: Math.random() },
            { x: "Июнь", y: Math.random() },
            { x: "Июль", y: Math.random() },
            { x: "Август", y: Math.random() },
            { x: "Сентябрь", y: Math.random() },
            { x: "Октябрь", y: Math.random() },
            { x: "Ноябрь", y: Math.random() },
            { x: "Декабрь", y: Math.random() },
          ];
        });
      };


  return (
    <div className={s.chart}>
        <VictoryChart domainPadding={{ x: 30 }} width={1400} height={300} >
            <VictoryLegend x={45} y={0}
                title="Статистика произведенных заказов"
                orientation="horizontal"
                titleOrientation="left"
                gutter={20}
                style={{ title: {fontSize: 22 }, labels: {fontSize: 17} }}
                data={[
                { name: "Без брака", symbol: { fill: "tomato" } },
                { name: "С браком", symbol: { fill: "blue" } },
                ]}
            />
            <VictoryGroup offset={20} style={{ data: { width: 10 } }}>
              <VictoryStack colorScale={"red"}>
                {getBarData().map((data, index) => {
                  return <VictoryBar key={index} data={data}/>;
                })}
              </VictoryStack>
              <VictoryStack colorScale={"blue"}>
                {getBarData().map((data, index) => {
                  return <VictoryBar key={index} data={data}/>;
                })}
              </VictoryStack>
            </VictoryGroup>
        </VictoryChart>
    </div>
  )
}

export default ProducedStatistics