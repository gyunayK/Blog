import { useEffect, useState, useRef, useCallback } from "react";
import "../style/Form.scss";
import { useNavigate, useParams } from "react-router-dom";

function EditBlog() {
  const textAreaRef = useRef(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8000/blogs/edit/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
      });
  }, []);

  const updateBlog = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new URLSearchParams();

    // Append form field values to the URLSearchParams object
    for (const pair of new FormData(form)) {
      formData.append(pair[0], pair[1]);
    }

    fetch(`http://localhost:8000/blogs/edit/${id}?_method=POST`, {
      method: "POST",
      body: formData.toString(), // Convert URLSearchParams to a string
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    navigate("/blogs");
  };

  const handleContentChange = useCallback((e) => {
    setBlog((prevBlog) => ({ ...prevBlog, content: e.target.value }));
  }, []);

  return (
    <div>
      <h1>Edit Blog</h1>
      <form onSubmit={updateBlog}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          defaultValue={blog.title}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          defaultValue={blog.author}
        />
        <textarea
          name="content"
          placeholder="Content"
          value={blog.content || ""}
          onChange={handleContentChange}
        />

        <button type="submit" className="form-btn">Update</button>
      </form>
    </div>
  );
}

export default EditBlog;
