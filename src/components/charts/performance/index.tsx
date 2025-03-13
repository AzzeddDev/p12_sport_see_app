import styled from "styled-components"
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts"
import { useUserData } from "../../../hooks/useUserHook"

// Styled component for the chart container
const ChartContainer = styled.div`
    width: 100%;
    height: 350px;
    background-color: #282d30;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`

const HexagonChart = ({ userId }: { userId: number }) => {
    const { performance, loading, error } = useUserData(userId)

    // log all data
    console.log("Performance:", performance)

    const radarData = performance?.data?.data?.map((item: any) => ({
        subject: performance.data.kind[item.kind],
        line: item.value,
    })) || []

    // log data
    console.log("radarData:", radarData)

    if (loading) {
        return <ChartContainer>Loading...</ChartContainer>
    }

    if (error) {
        return <ChartContainer>Error: {error}</ChartContainer>
    }

    if (!performance) {
        return <ChartContainer>No performance data available</ChartContainer>
    }

    return (
        <ChartContainer>
            <RadarChart outerRadius={130} width={730} height={350} data={radarData}>
                <PolarGrid
                    stroke={"#fff"}
                />
                <PolarAngleAxis
                    dataKey="subject"
                    stroke={"#fff"}
                    tickFormatter={(value) => value.charAt(0).toUpperCase() + value.slice(1)}
                />
                <PolarRadiusAxis
                    angle={30}
                    domain={[0, 200]}
                    tick={false}
                    dx={3}
                />
                <Radar
                    name="Performance"
                    dataKey="line"
                    stroke="#FF0101B2"
                    fill="#FF0101B2"
                    fillOpacity={0.6} />
            </RadarChart>
        </ChartContainer>
    )
}

export default HexagonChart
