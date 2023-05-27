const router = require("express").Router();

const {
    getAllBlogs,
  } = require("../controller/blog.controller");

  router.get("/all", getAllBlogs);




  module.exports = router;