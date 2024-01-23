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

  const handlePost = () => {
    console.log("post", postContent);
    // You can perform additional actions with the postContent state
  };

  const handleAnalyze = () => {
    console.log("analyze", postContent.uniqueid);
    // You can perform additional actions with the postContent state
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
            onChange={(e) => handleInputChange("textcontent", e.target.value)}
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
