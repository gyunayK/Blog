import { useEffect, useState } from "react";
import "../style/Blogs.scss";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/blogs/all")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  console.log(blogs);

  return (
    <div>
      <h1>Blogs Page</h1>

      <div className="blogWrapper">
        {blogs && blogs.map((blog, index) => {
          return (
            <div className="blog" key={index}>
              <form action={`http://localhost:8000/blogs/delete/${blog._id}?_method=DELETE`} method="POST" >
                <div className="blog-btn">
                <a href={`http://localhost:8000/blogs/edit/${blog._id}`}>Edit</a>
                <button type="submit">Delete</button>
                </div>
              </form>
              <h2 className="blogTitle">{blog.title}</h2>
              <p className="blogContent">{blog.content}</p>
              <p className="blogAuthor">{blog.author}</p>
            </div>
          );
        })
        }
        
      </div>
    </div>
  );
}

export default Blogs;
