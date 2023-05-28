const router = require("express").Router();

const {
  getAllBlogs,
  postCreateBlog,
  deleteBlog,
  getEditBlogById,
  postEditBlogById,
} = require("../controller/blog.controller");

router.get("/all", getAllBlogs);
router.post("/create", postCreateBlog);
router.route("/edit/:id").get(getEditBlogById).post(postEditBlogById)
router.delete("/delete/:id", deleteBlog)




module.exports = router;