import api from "../../utils/axios"
import { setUserData } from "../redux/userSlice"


export const getCurrentUser = async (dispatch) => {
    try {
        const { data } = await api.get("/auth/me")
        dispatch(setUserData(data))
        console.log("Current user response:", data)
    } catch (error) {
        console.log("error in getcurrent user", error)
    }
}