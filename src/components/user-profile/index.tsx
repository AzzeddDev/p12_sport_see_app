import {useUserData} from "../../hooks/useUserHook"

const UserProfile = ({ userId }: { userId: number }) => {
    const { userData } = useUserData(userId)

    return (
        <div className="profile">
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
