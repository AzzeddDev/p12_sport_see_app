import {useUserData} from "../../hooks/useUserHook"

interface IconBoxProps {
    userId: number
    icon: string
    title: string
    titleAlt: string
    unit?: string
    iconBg?: string
    dataKey: keyof { calorieCount: number; proteinCount: number; carbohydrateCount: number; lipidCount: number }
}

const IconBox = ({ icon, title, titleAlt, iconBg, userId, unit, dataKey }: IconBoxProps) => {
    const { userData } = useUserData(userId)
    const value = userData?.data?.keyData?.[dataKey] ?? "Loading..."

    return (
        <div className="p-4 border rounded-lg shadow-md flex items-start gap-4">
            <div style={{ backgroundColor: iconBg }} className="p-3 rounded-full">
                <img src={icon} alt={titleAlt} className="w-6 h-6" />
            </div>
            <div>
                <h3 className="text-xl font-semibold">{value}{unit}</h3>
                <p className="text-base text-gray-600">{title}</p>
            </div>
        </div>
    )
}

export default IconBox
