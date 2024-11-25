import express from "express";
import { commentPost, deletePost, getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);

/* Delete*/
router.delete("/:userId/posts/:id", verifyToken, deletePost); 

//comment 
router.patch("/:id/comment", verifyToken,commentPost); 






export default router;
