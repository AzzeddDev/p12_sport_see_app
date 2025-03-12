import { useEffect, useState } from "react"
import {getUserInfo} from "../../api/api.ts"

export const useUserData = (userId: number) => {
    const [userData, setUserData] = useState<any>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUserInfo(userId)
                setUserData(data)
            } catch (error) {
                console.error("Failed to fetch user data", error)
            }
        }

        fetchData()
    }, [userId])

    return { userData }
}
