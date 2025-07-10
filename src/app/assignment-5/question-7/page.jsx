import React from "react";
import PostForm from "@/component/assignment-5/PostForm";

export default function CreatePostPage() {
  return (
    <div className="container-center"> 
      <p className="question">Q7. Create a Component in Next.js that renders a form allowing the user to input data, such as a post title and content. On form submission, use Axios to send a POST request to a public API endpoint, submitting the user's input data. Handle success and error states appropriately in the UI.
     </p>
      <h1>Create a New Post</h1>
      <PostForm />
    </div>
  );
}
