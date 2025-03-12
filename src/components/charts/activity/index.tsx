import React, { useEffect, useState } from 'react'
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar, TooltipProps
} from 'recharts'
import { getUserActivity } from '../../../api/api'
import styled from "styled-components"

const CustomTooltipClass = styled.div`
  background-color: #E60000;
  padding: 10px 10px 0.5px 10px;
  color: #fff;
  text-align: center;
  font-weight: 600;
`
const LegendWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
`;

const LegendColorBox = styled.div`
  width: 8px;
  height: 8px;
  margin-right: 8px;
  border-radius: 100%;
  background-color: ${(props) => props.color};
`;

const Title = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #333;
`;


const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <CustomTooltipClass>
                <p>{`${payload[0].value}kg`}</p>
                <p>{`${payload[1].value}kCal`}</p>
            </CustomTooltipClass>
        )
    }
    return null
}


// @ts-ignore
const ActivityChart = ({ userId }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const numericUserId = parseInt(userId, 10)
            const activity = await getUserActivity(numericUserId)

            if (activity && activity.data && activity.data.sessions) {
                const formattedData = activity.data.sessions.map((session: any, i: number) => ({
                    ...session,
                    day: i + 1
                }))
                
                setData(formattedData)
            }
        }
        fetchData()
    }, [userId])

    return (
        <div className="activity">
            {/* Wrapper title + Legend */}
            <LegendWrapper>
                <h2><Title>Activité quotidienne</Title></h2>

                {/* Custom Legend */}
                <div className="d-flex gap-2">
                    <LegendItem>
                        <LegendColorBox color="red" />
                        <span>Poids (kg)</span>
                    </LegendItem>
                    <LegendItem>
                        <LegendColorBox color="black" />
                        <span>Calories brûlées (kCal)</span>
                    </LegendItem>
                </div>
            </LegendWrapper>

            {/* Responsive Container chart */}
            <ResponsiveContainer width={"100%"} height={225}>
                <BarChart data={data} barGap={8}>
                    <CartesianGrid
                        strokeDasharray={"1 1"}
                        vertical={false}
                    />
                    <XAxis dataKey={"day"} axisLine={false} />
                    
                    {/* YAxis kilogram */}
                    <YAxis
                        dataKey={"kilogram"}
                        yAxisId={"kg"}
                        orientation={"right"}
                        domain={["dataMin - 1", "dataMax + 2"]}
                        axisLine={false}
                    />

                    {/* YAxis calories */}
                    <YAxis
                        yAxisId={"cal"}
                        dataKey={"calories"}
                        domain={[0, "dataMax + 50"]}
                        hide={true}
                        axisLine={false}
                    />
                    
                    <Tooltip content={<CustomTooltip />} />
                    
                    {/* Bar kilogram */}
                    <Bar
                        yAxisId={"kg"}
                        dataKey={"kilogram"}
                        name={"Poids (kg)"}
                        fill={"red"}
                        barSize={8}
                        radius={[5,5,0,0]}
                    />
                    
                    {/* Bar calories */}
                    <Bar
                        yAxisId={"cal"}
                        dataKey={"calories"}
                        name={"Calories brûlées (kCal)"}
                        fill={"black"}
                        barSize={8}
                        radius={[5,5,0,0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ActivityChart
