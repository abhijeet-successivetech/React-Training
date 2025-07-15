import Link from "next/link";
import data from "./data.json";

export default function HomePage() {
  return (
    <>
      <h1>All Assignments</h1>
      <main style={{display:"flex", padding: "2rem",flexDirection:"column",gap:"2rem" }}>
        {data.map((item, index) => (
          <div
            key={index}
            style={{ display: "flex", marginRight: "10px",gap:"5rem"}}
          >
            <Link href={item.url}>{item.name}</Link>
          </div>
        ))}
      </main>
    </>
  );
}
