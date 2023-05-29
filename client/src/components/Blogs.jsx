import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  return (
    <div>
      {/* <h1 className="title">Blogs Page</h1> */}

      {blogs.length !== 0 ? (
        blogs.map((blog, index) => {
          return (
            <div className="blogWrapper" key={index}>
              <div className="blog">
                <form
                  action={`http://localhost:8000/blogs/delete/${blog._id}?_method=DELETE`}
                  method="POST"
                >
                  <div className="blog-btn-wrapper">
                    {/* <a href={`http://localhost:8000/blogs/edit/${blog._id}`}>Edit</a> */}
                    <Link to={`/blogs/edit/${blog._id}`} className="blog-btn">
                      Edit
                    </Link>

                    <button type="submit" className="blog-btn">
                      Delete
                    </button>
                  </div>
                </form>
                <h2 className="blogTitle">{blog.title}</h2>
                <p className="blogContent">{blog.content}</p>
                <i className="blogAuthor">{blog.author}</i>
              </div>
            </div>
          );
        })
      ) : (
        <h1 className="no-blogs">No Blogs!!</h1>
      )}
    </div>
  );
}

export default Blogs;
