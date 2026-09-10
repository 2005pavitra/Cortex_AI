export const getProfile = async(req, res) =>{
    try {
        return res.staus(200).json(req.user)
    } catch (error) {
        console.error("Profile endpoint error",error)
        return res.status(500).json({
            message:"Profile endpoint error"
        })
    }
}