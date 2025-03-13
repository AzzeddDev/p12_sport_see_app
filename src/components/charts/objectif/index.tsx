import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import styled from "styled-components"
import { useUserData } from "../../../hooks/useUserHook"

const ChartContainer = styled.div`
    width: 100%;
    height: 350px;
    background-color: #FBFBFB;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const ScoreText = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-weight: bold;

    span {
        font-size: 40px;
    }

    p {
        font-size: 20px;
        color: #74798C;
        margin: 0;
        font-weight: 400;
    }
`;

const ScoreChartTitle = styled.h2`
    position: absolute;
    top: 1.5rem;
    left: 2rem;
    margin: 0;
    font-size: 1.2rem;
    font-weight: 500;

    @media (max-width: 1340px) {
        top: 1rem;
        left: 1rem;
    }
`;

const ScoreChart = ({ userId }: { userId: number }) => {
    const { userData } = useUserData(userId)
    const todayScore = userData?.data?.todayScore || userData?.data?.score || 0
    const scorePercentage = todayScore * 100

    const data = [
        { value: scorePercentage, fill: "#ff0000" },
        { value: 100 - scorePercentage, fill: "#FFFFFF" }
    ];


    return (
        <ChartContainer>
            <ScoreChartTitle>Score</ScoreChartTitle>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        innerRadius={112}
                        outerRadius={125}
                        startAngle={90}
                        endAngle={450}
                        cx="50%"
                        cy="50%"
                        paddingAngle={0}
                        blendStroke
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={entry.fill}
                                // @ts-ignore
                                cornerRadius={"50%"}
                            />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <ScoreText>
                <span>{scorePercentage}%</span>
                <p>de votre <br /> objectif</p>
            </ScoreText>
        </ChartContainer>
    );
};

export default ScoreChart;
