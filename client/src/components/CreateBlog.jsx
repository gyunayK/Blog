import { useEffect } from "react";
import "../style/Form.scss";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
  const navigate = useNavigate();
  const submitBlog = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new URLSearchParams();

    // Append form field values to the URLSearchParams object
    for (const pair of new FormData(form)) {
      formData.append(pair[0], pair[1]);
    }

    fetch("http://localhost:8000/blogs/create", {
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

  return (
    <div>
      <h1>Create Blog</h1>
      <form onSubmit={submitBlog}>
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="author" placeholder="Author" />
        <textarea name="content" placeholder="Content" />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateBlog;
