import express from "express"
import{Register,login,logout,updateProfile,checkAuth} from "../controllers/auth.js"
import { protectRoutes } from "../middleware/auth.js";
const router =express.Router();
router.post("/Register", Register);
router.post("/login",login);
router.post("/logout",logout);
router.put("/update-profile",protectRoutes,updateProfile);
router.get("/check",protectRoutes,checkAuth)

export default router;