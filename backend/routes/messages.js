import express from "express"
import { protectRoutes } from "../middleware/auth.js";
import { getUsersForSidebar,getMessages,sendMessage} from "../controllers/messages.js";
const router =express.Router()
router.get("/users",protectRoutes,getUsersForSidebar);
router.get("/:id",protectRoutes,getMessages)
router.post("/send/:id",protectRoutes,sendMessage)

export default router;



