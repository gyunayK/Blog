const Blog = require("../model/blog.model");

exports.getAllBlogs = (req, res) => {
    Blog.find()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => console.error(err.message));
  };
  