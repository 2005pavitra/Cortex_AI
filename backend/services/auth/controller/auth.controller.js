export const getProfile = async (req, res) => {
    try {
        return res.status(200).json({
            userId: req.headers["x-user-id"],
            name: req.headers["x-user-name"],
            email: req.headers["x-user-email"],
            avatar: req.headers["x-user-avatar"] || ""
        })
    } catch (error) {
        console.error("Profile endpoint error", error)
        return res.status(500).json({
            message: "Profile endpoint error"
        })
    }
}