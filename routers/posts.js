const express = require('express');
const router = express.Router();
const postsArray = require("../data");
const controller = require("../controller/post-controller");

router.get("/", controller.index);

router.get("/:id", controller.show)

router.post("/", controller.create)

router.put("/", controller.update)

router.patch("/:id", controller.modify)

router.delete("/:id", controller.destroy)

module.exports = router;