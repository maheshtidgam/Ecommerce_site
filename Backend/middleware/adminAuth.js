import jwt from 'jsonwebtoken';


const adminAUth = async (req, res, next) => {
    try {
        const { token } = req.headers;
        if (!token) {
            return res.status(401).json({ success: false, message: "Unauthorized Login" });
        }
        const token_decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (token_decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.status(401).json({ success: false, message: "Unauthorized Login" });
        }
        next()
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export default adminAUth