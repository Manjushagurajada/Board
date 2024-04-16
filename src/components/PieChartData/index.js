import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import './index.css'

const PieChartData = props => {
  const {data} = props
  const {tested, vaccinated1, vaccinated2} = data.delta7

  const pieData = [
    {number: tested},
    {number: vaccinated1},
    {number: vaccinated2},
  ]
  return (
    <ResponsiveContainer
      width="100%"
      height={300}
      className="recharts-responsive-container"
    >
      <PieChart>
        <Pie
          cx="70%"
          cy="40%"
          data={pieData}
          startAngle={0}
          endAngle={360}
          
          outerRadius="70%"
          dataKey="number"
        >
          <Cell name="Basic Tees" fill="#98D89E" />
          <Cell name="Custom Short Pants" fill="#EE8484" />
          <Cell name="Super Hoodies" fill="#F6DC7D" />
        </Pie>
        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default PieChartData
