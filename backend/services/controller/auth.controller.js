export const register = async (req, res) =>{
    try {
        res.json({message:"User registered"})
    } catch (error) {
        console.log("Error in registering user", error)
    }
}