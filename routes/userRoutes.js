const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/local", userController.getLocalUsers);
router.get("/firebase", userController.getFirebaseUsers);
router.post("/firebase", userController.addFirebaseUser);

router.post("/push-json", userController.pushUsersToFirebase);

module.exports = router;

