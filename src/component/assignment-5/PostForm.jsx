"use client";

import React, { useState } from "react";
import axios from "axios";

export default function PostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: title,
          body: content,
          userId: 1,
        }
      );

      console.log("Post created:", response.data);
      setSuccessMessage("Post created successfully!");
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error creating post:", error);
      setErrorMessage("Failed to create post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {successMessage && (
        <div>
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div>
          {errorMessage}
        </div>
      )}

      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="4"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit Post"}
      </button>
    </form>
  );
}
