import api from "../../utils/axios"


export const getCurrentUser = async(req, res) =>{
    try {
        const {data} = await api.get("/me")
        console.log(data)
    } catch (error) {
        console.log("error in getcurrent user", error)
    }
}