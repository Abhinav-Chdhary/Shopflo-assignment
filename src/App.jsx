import React, { useState } from "react";

export default function App() {
  const initialPostContent = { uniqueid: "", textContent: "" };
  const [postContent, setPostContent] = useState(initialPostContent);

  const handleInputChange = (field, value) => {
    setPostContent({
      ...postContent,
      [field]: value,
    });
  };

  const handlePost = async () => {
    const response = await fetch("http://localhost:5000/api/v1/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uniqueid: postContent.uniqueid,
        textContent: postContent.textContent,
      }),
    });
    const json = await response.json();
    if (json.success) alert("Post Created");
  };

  const handleAnalyze = async () => {
    const response = await fetch(
      `http://localhost:5000/api/v1/posts/${postContent.uniqueid}/analysis`,
      {
        method: "GET",
      }
    );
    const json = await response.json();
    alert(
      `Word Count: ${json.wordCount}, Average Word Length: ${json.averageWordLength}`
    );
  };

  return (
    <div className="bg-dark text-light container p-4">
      <form>
        <div className="mb-3">
          <label htmlFor="uniqueid" className="form-label">
            Unique Id:
          </label>
          <input
            className="form-control"
            type="number"
            id="uniqueid"
            value={postContent.uniqueid}
            onChange={(e) => handleInputChange("uniqueid", e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="post-content" className="form-label">
            Write your post:
          </label>
          <textarea
            className="form-control"
            id="post-content"
            placeholder="Enter your post here..."
            value={postContent.textContent}
            onChange={(e) => handleInputChange("textContent", e.target.value)}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-danger me-2"
          onClick={handlePost}
        >
          Post
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAnalyze}
        >
          Analyze
        </button>
      </form>
    </div>
  );
}
