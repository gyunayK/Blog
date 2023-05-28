const Blog = require("../model/blog.model");

exports.getAllBlogs = (req, res) => {
    Blog.find()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => console.error(err.message));
  };
  

  // exports.getCreateBlog = (req, res) => {
  //   res.render("create", { model: {} });
  // };
  
  exports.postCreateBlog = (req, res) => {
    const { title, author, content } = req.body;
    console.log(req.body);
  
    const newBlog = new Blog(title, author, content);
    newBlog
      .save()
      .then(() => {
        res.redirect("/books/all");
      })
      .catch((err) => console.error(err.message));
  };
  
  exports.deleteBlog = (req, res) => {
    const id = req.params.id;
    console.log(id);
  
    Blog.deleteOne(id).then(() => {
      res.redirect("http://127.0.0.1:5173/blogs")
    }).catch((err) => console.error(err.message));
  };

  exports.getEditBlogById = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
      .then((rows) => {
        res.send(rows[0]);
      })
      .catch((err) => console.error(err.message));
  };
  
  exports.postEditBlogById = (req, res) => {
    const id = req.params.id;
    const { title, author, content } = req.body;
  
    const dataToUpdate = { id, title, author, content };
  
    Blog.updateOne(dataToUpdate).then(() => {
      res.redirect("/blogs/all")
    }).catch((err) => console.error(err.message));
  };