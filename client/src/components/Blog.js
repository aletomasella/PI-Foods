import React, { useState } from "react";

const Blog = () => {
  const [input, setInput] = useState({
    content: "",
  });
  const [posts, setPosts] = useState([]);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([...posts, input.content]);

    setInput({
      content: "",
    });
  };

  return (
    <>
      <h1>Sam Blog</h1>
      <label htmlFor="content"></label>
      <form onSubmit={handleSubmit}>
        <textarea
          type="textarea"
          name="content"
          value={input.content}
          onChange={handleChange}
          style={{ height: "100px", width: "25%" }}
        />
        <br />
        <input type="submit" />
      </form>
      {posts &&
        posts.map((e) => {
          return (
            <div key={e}>
              <p>{e}</p>
            </div>
          );
        })}
    </>
  );
};

export default Blog;
