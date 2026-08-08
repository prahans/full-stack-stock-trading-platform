const {
  Signup,
  Login,
  VerifyUser,
  Logout,
} = require("../Controllers/AuthController");

const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.get("/verify", VerifyUser);
router.post("/logout", Logout);

module.exports = router;
