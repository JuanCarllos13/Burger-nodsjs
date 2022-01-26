import jwt from 'jsonwebtoken'
import authconfig from '../../config/auth'

export default (request, response, next) => {
    const authtoken = request.headers.authorization

    if (!authtoken) {
        return response.status(401).json({ error: "Token not provided" })
    }

    const Token = authtoken.split(' ')[1]


    try {
        jwt.verify(Token, authconfig.secret, function (err, decoded) {
            if (err) {
                throw new Error()
            }
            request.userId = decoded.id
            request.userName = decoded.name
            return next()
        })
    } catch (err) {
        return response.status(401).json({ error: "Token is Invalid" })
    }
}