import Pagination from "../Pagination";

const postsPerPage = 10;

const PostPage = async ({ params }) => {
  const currentPage = parseInt(params.posts) || 1;
  console.log("currentPage", currentPage);

  let allPosts = [];

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    allPosts = await res.json();
  } catch (error) {
    return (
      <div className="container-center">
        <p style={{ color: "red" }}>Please try again later.</p>
      </div>
    );
  }

  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  const start = (currentPage - 1) * postsPerPage;
  const paginatedPosts = allPosts.slice(start, start + postsPerPage);

  return (
    <div className="container-center">
      <h1 className="question">Posts - Page {currentPage}</h1>
      <div className="flex" style={{ gap: "1rem" }}>
        {paginatedPosts.map((post) => (
          <div className="card" key={post?.id}>
            <p><strong>Post ID:</strong> {post.id}</p>
            <h2 style={{ fontSize: "1.2rem", color: "#333" }}>
              Title: {post?.title}
            </h2>
            <p>{post?.body}</p>
          </div>
        ))}
      </div>
      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default PostPage;
