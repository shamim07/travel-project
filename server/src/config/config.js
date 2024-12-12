import dotenv from "dotenv";

// Load environment variables
dotenv.config();


export const {
  APP_PORT,
  MONGO_URL,
  CLIENT_URL,
  ADMIN_USER,
  ADMIN_PASS,
  
  JWT_SECRET,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} = process.env;


// // config/config.js
// export const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
// export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
// export const GUEST_NAME = process.env.GUEST_NAME;
// export const GUEST_PASSWORD = process.env.GUEST_PASSWORD;
// export const JWT_SECRET = process.env.JWT_SECRET;
