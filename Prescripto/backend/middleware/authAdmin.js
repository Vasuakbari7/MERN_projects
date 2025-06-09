import jwt from "jsonwebtoken";

const ADMIN_EMAIL = "admin@prescripto.com";
const ADMIN_PASSWORD = "admin1234";
const JWT_SECRET = "lolipop";

const authAdmin = async (req, res, next) => {
  try {
    const { atoken } = req.headers;
    
    if (!atoken) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    const token_decode = jwt.verify(atoken, JWT_SECRET);
    if (token_decode !== ADMIN_EMAIL + ADMIN_PASSWORD) {
      return res.status(403).json({ success: false, message: "Forbidden" });
    }
    next();

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export default authAdmin;
