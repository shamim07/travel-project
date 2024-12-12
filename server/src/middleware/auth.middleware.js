import jwt from "jsonwebtoken";
import { ADMIN_USER, JWT_SECRET } from "../config/config.js";
export const isAdmin = (req, res, next) => {
    try {
      const token =
        req.cookies["accessToken"] ||
        (req.headers.authorization && req.headers.authorization.split(" ")[1]);
  
      if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
      }
  
      const decoded = jwt.verify(token, JWT_SECRET);
      console.log("Decoded token:", decoded); // Log decoded token for debugging
  
      if (!decoded || decoded.username !== ADMIN_USER) {
        return res.status(403).json({
          success: false,
          message: "Forbidden: Invalid token or unauthorized access",
        });
      }
  
      req.user = decoded; // Attach decoded payload to the request
      next();
    } catch (error) {
      console.error("Error in isAdmin middleware:", error);
      res.status(401).json({
        success: false,
        message: "Unauthorized: Invalid or expired token",
      });
    }
  };
  
// export const isAdmin = (req, res, next) => {
//   try {
//     // Extract token from cookies or Authorization header
//     const token =
//       req.cookies["accessToken"] ||
//       (req.headers.authorization && req.headers.authorization.split(" ")[1]);

//     if (!token) {
//       return res.status(401).json({ message: "Unauthorized: No token provided" });
//     }

//     // Verify and decode the token
//     const decoded = jwt.verify(token, JWT_SECRET);

//     console.log("Decoded token:", decoded); // Log decoded token payload for debugging

//     // Validate admin credentials
//     if (!decoded || decoded.username !== ADMIN_USER) {
//       return res.status(403).json({
//         success: false,
//         message: "Forbidden: Invalid token or unauthorized access",
//       });
//     }

//     // Attach decoded payload to the request for further use
//     req.user = decoded;
//     console.log("Decoded username:", decoded.username);
//     console.log("Expected admin username:", ADMIN_USER);
    
//     // Proceed to the next middleware
//     next();
//   } catch (error) {
//     console.error("Error in isAdmin middleware:", error);
//     res.status(401).json({
//       success: false,
//       message: "Unauthorized: Invalid or expired token",
//     });
//   }
// };



// import jwt from "jsonwebtoken";
// import { ADMIN_USERNAME, JWT_SECRET } from "../config/config.js";

// export const isAdmin = async (req, res, next) => {
//   try {
//     // Extract token from cookies
//     const token = req.cookies["agency-blog-token"];

//     if (!token) {
//       return res.status(401).json({
//         success: false,
//         message: "Unauthorized: No token provided",
//       });
//     }

//     // Verify and decode the token
//     const decoded = jwt.verify(token, JWT_SECRET);

//     // Check if the decoded username matches admin credentials
//     if (!decoded || decoded.username !== ADMIN_USERNAME) {
//       return res.status(403).json({
//         success: false,
//         message: "Forbidden: Invalid token or unauthorized access",
//       });
//     }

//     // Proceed to the next middleware if validation is successful
//     next();
//   } catch (error) {
//     console.error("Error in isAdmin middleware:", error);
//     res.status(401).json({
//       success: false,
//       message: "Unauthorized: Invalid or expired token",
//     });
//   }
// };



// import jwt from "jsonwebtoken";
// import { ADMIN_USERNAME, JWT_SECRET } from "../config/config.js";

// export const isAdmin = async (req, res, next) => {
//   try {
//     const token = req.cookies["agency-blog-token"];

//     if (!token) {
//       return res.status(401).json({
//         success: false,
//         message: "Unauthorized: No token provided",
//       });
//     }

//     consx xt decoded = jwt.verify(token, JWT_SECRET);

//     if (!decoded || decoded.username !== ADMIN_USERNAME) {
//       return res.status(403).json({
//         success: false,
//         message: "Forbidden: Invalid token or unauthorized access",
//       });
//     }

//     // Token and admin validation successful
//     next();
//   } catch (error) {
//     res.status(401).json({
//       success: false,
//       message: "Unauthorized: Invalid or expired token",
//     });
//   }
// };


// // import jwt from "jsonwebtoken";
// // import { ADMIN_USERNAME, JWT_SECRET } from "../config/config.js";

// // export const isAdminAuthenticated = async (req, res, next) => {
// //   try {
// //     let token = req.cookies["agency-blog-token"];
// //     if (!token) {
// //       throw new Error("You are not logged in as admin");
// //     }
// //     const decoded = jwt.verify(token, JWT_SECRET);
// //     if (!decoded) {
// //       throw new Error("You are not logged in as admin");
// //     }
// //     if (decoded?.username !== ADMIN_USERNAME) {
// //       throw new Error("You are not logged in as admin");
// //     }

// //     next();
// //   } catch (error) {
// //     res.status(400).json({ message: error.message,success:false });
// //   }
// // };
