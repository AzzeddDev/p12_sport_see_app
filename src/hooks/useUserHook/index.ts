import { useEffect, useState } from "react"
import {getUserAverageSessions, getUserInfo, getUserPerformance} from "../../api/api.ts"

export const useUserData = (userId: number) => {
    const [userData, setUserData] = useState<any>(null)
    const [performance, setPerformance] = useState<any>(null)
    const [averageSession, setAverageSessions] = useState<any>(null)

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const userInfo = await getUserInfo(userId)
                const userPerformance = await getUserPerformance(userId)
                const userAverageSessions = await getUserAverageSessions(userId)

                setUserData(userInfo)
                setPerformance(userPerformance)
                setAverageSessions(userAverageSessions)
            } catch (err) {
                console.error("Failed to fetch user data", err)
                setError("Failed to load user data")
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [userId])

    return { userData, performance, averageSession, loading, error }
}
