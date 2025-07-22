import Link from "next/link";

const Page = () => {
  return (
    <div className="container-center">
      <p className="question">
        Q1. Create a Next.js app using the App Router with multiple pages. Use
        next/dynamic to lazily load page components and improve initial load
        time. Components should load only when their routes are visited.
      </p>
      <div style={{display:"flex", gap:"2rem"}}>
        {["Home", "About"].map((item, index) => (
        <Link key={index} href={`/assignment-6/question-1/${item}`} >
          <button className="button-primary">{item}</button>
        </Link>
      ))}
      </div>
      
    </div>
  );
};
export default Page;