import jwt from "jsonwebtoken";
import {
  ADMIN_USER,
  ADMIN_PASS,
  JWT_SECRET,
} from "../config/config.js";

const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log("Request Body:", req.body);

    // Validate username and password
    const isAdmin = username === ADMIN_USER && password === ADMIN_PASS;
    console.log("Admin Username:", ADMIN_USER);
    console.log("Admin Password:", ADMIN_PASS);

    if (isAdmin) {
      const role = "admin"; // Assign the admin role

      // Generate a JWT token with username, role, and expiration time
      const token = jwt.sign({ username, role }, JWT_SECRET, { expiresIn: "1h" });

      // Respond with the token and user details
      return res.status(200).json({
        success: true,
        message: "Login successful",
        accessToken: token,
        user: { username, role },
      });
    }

    // Invalid credentials
    res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  } catch (error) {
    console.error("Error in loginController:", error);

    // Internal server error
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export default loginController;
