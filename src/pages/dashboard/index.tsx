import UserProfile from "../../components/user-profile"
import {useParams} from "react-router-dom"
import ActivityChart from "../../components/charts/activity"
import IconBox from "../../components/icon-box"
import energyIcon from "../../assets/img/energy.svg"

const Dashboard = () => {
    const { id } = useParams<{ id: string }>()
    const userId = Number(id)

    if (isNaN(userId)) {
        return <div>Id user invalide</div>
    }

    // TODO: dashboard with two buttons ID -> to users
    // TODO: responsive 1024 min
    return (
        <main className={"container-fluid mainApp my-5"}>
            <div>
                <UserProfile userId={userId}/>
                <div className="row">
                    <div className="col-md-10">
                        <ActivityChart userId={userId} />
                        <div className="row">
                            <div className={"col-md-4"}>lines</div>
                            <div className={"col-md-4"}>hexagone</div>
                            <div className={"col-md-4"}>cercle</div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <IconBox icon={energyIcon} userId={userId} title={"Calories"} dataKey="calorieCount" unit={"kCal"} iconBg={"rgba(255, 0, 0, 0.07)"} titleAlt={"Calories icon"} />
                        <IconBox icon={energyIcon} userId={userId} title={"Proteines"} dataKey="proteinCount" unit={"g"} iconBg={"rgba(74, 184, 255, 0.07)"} titleAlt={"Proteins icon"} />
                        <IconBox icon={energyIcon} userId={userId} title={"Glucides"} dataKey="carbohydrateCount" unit={"g"} iconBg={"rgba(253, 204, 12, 0.07)"} titleAlt={"Carbs icon"} />
                        <IconBox icon={energyIcon} userId={userId} title={"Lipides"} dataKey="lipidCount" unit={"g"} iconBg={"rgba(253, 81, 129, 0.07)"} titleAlt={"Lipids icon"} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Dashboard