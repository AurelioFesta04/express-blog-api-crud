const express = require('express');
const router = express.Router();
const postsArray = require("../data");
const controller = require("../controller/post-controller");
const checkExist = require("../middlewares/checkExist");

router.get("/", checkExist, controller.index);

router.get("/:id", checkExist, controller.show)

router.post("/", checkExist, controller.create)

router.put("/", checkExist, controller.update)

router.patch("/:id", checkExist, controller.modify)

router.delete("/:id", checkExist, controller.destroy)

module.exports = router;