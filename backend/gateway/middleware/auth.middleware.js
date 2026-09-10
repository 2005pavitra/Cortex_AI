import redis from "../../shared/redis/redis.js"

export const authorised = async (req, res, next) => {
    try {
        const sessionId = req.cookies?.session;
        if (!sessionId) {
            return res.status(400).json({
                message: "Unauthorised user"
            })
        }

        const sessionDataString = await redis.get(`session: $sessionId`)
        if (!sessionDataString) {
            return res.status(400).json({
                message: "Session expired"
            })
        }

        const userSession = JSON.parse(sessionDataString);
        req.user = userSession;
        req.headers["x-user-id"] = userSession.userId;
        req.headers["x-user-email"] = userSession.email;
        req.headers["x-user-name"] = userSession.name;
    } catch (error) {
        console.log("Auth gateway error", error)
        return res.status(500).json({ success: false, error: "Internal gateway auth failure" });
    }

}