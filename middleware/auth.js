// import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
    // console.log(req.header('x-access-token'))
    const token = req.header('x-access-token')
    // console.log(req)
    if (!token)
        return res
            .status(403)
            .json({error: true, message: 'Access Denied: No token provided'})

    try {
        const tokenDetails = jwt.verify(
            token,
            process.env.ACCESS_TOKEN_PRIVATE_KEY
        )
        req.user = tokenDetails
        next()
    } catch (err) {
        res
            .status(403)
            .json({error: true, message: 'Access Denied: Invalid token'})
    }
    next()
}

export default auth
