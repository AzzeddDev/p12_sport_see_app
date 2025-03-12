import axios from "axios"

// URL database
export const API_BASE_URL = "http://localhost:3000/user"

// checker les infos
axios.get(API_BASE_URL)
    .then(response => {
        console.log("Réponse API :", response.data)
    })
    .catch(error => {
        console.error("Erreur lors de l'appel API :", error)
    });

// fonction fetch infos d'un user
export const getUserInfo = async (userId: number) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${userId}`)
        return response.data
    } catch (error) {
        console.error("Erreur lors de la récupération des informations utilisateur:", error)
        return null
    }
}

// fonction fetch l'activité d'un user
export const getUserActivity = async (userId: number) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${userId}/activity`)
        return response.data
    } catch (error) {
        console.error("Erreur lors de la récupération de l'activité utilisateur:", error)
        return null
    }
}

// fonction fetch les sessions moyennes d'un user
export const getUserAverageSessions = async (userId: number) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${userId}/average-sessions`)
        return response.data
    } catch (error) {
        console.error("Erreur lors de la récupération des sessions moyennes:", error)
        return null
    }
}

// fonction fetch la performance d'un user
export const getUserPerformance = async (userId: number) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${userId}/performance`)
        return response.data
    } catch (error) {
        console.error("Erreur lors de la récupération des performances utilisateur:", error)
        return null
    }
}