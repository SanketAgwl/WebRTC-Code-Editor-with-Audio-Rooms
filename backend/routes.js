const router = require("express").Router();
const authController = require("./controllers/auth-controller");
const activateController = require("./controllers/activate-controller");
const authMiddleware = require("./middlewares/auth-middleware");
const roomsController = require("./controllers/rooms-controller");
const userController = require("./controllers/user-controller");

router.post("/api/send-otp", authController.sendOtp);
router.post("/api/verify-otp", authController.verifyOtp);
router.post("/api/activate", authMiddleware, activateController.activate);
router.get("/api/refresh", authController.refresh);
router.post("/api/logout", authMiddleware, authController.logout);
router.post("/api/rooms", authMiddleware, roomsController.create);
router.get("/api/rooms", authMiddleware, roomsController.index);
router.get("/api/rooms/:roomId", authMiddleware, roomsController.show);
router.post(
  "/api/rooms/addUser/:roomId",
  authMiddleware,
  roomsController.addUser
);
router.post(
  "/api/rooms/removeUser/:roomId",
  authMiddleware,
  roomsController.removeUser
);
router.get("/api/profile/:userId", authMiddleware, userController.getUser);
router.post("/api/follow/:userId", authMiddleware, userController.followUser);
router.post(
  "/api/unfollow/:userId",
  authMiddleware,
  userController.unfollowUser
);
router.post("/api/changeBio", authMiddleware, userController.changeBio);

module.exports = router;
