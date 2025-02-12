import { useEffect, useState } from "react"
import { getUserInfo } from "../../api/api"

const UserProfile = ({ userId }: { userId: number }) => {
    const [userData, setUserData] = useState<any>(null)

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUserInfo(userId)
            setUserData(data)
        }

        fetchData()
    }, [userId])

    return (
        <div>
            {userData ? (
                <div>
                    <h1>Bienvenue, {userData.data.userInfos.firstName} !</h1>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
            ) : (
                <p>Chargement des données...</p>
            )}
        </div>
    )
}

export default UserProfile
