import Link from "next/link";
import data from "./data";

export default function HomePage() {
  return (
    <>
      <h1>All Assignments</h1>
      <main style={{ padding: "2rem" }}>
        {data.map((item, index) => (
          <div
            key={index}
            style={{ display: "inline-block", marginRight: "10px" }}
          >
            <Link href={item.url}>{item.name}</Link>
          </div>
        ))}
      </main>
    </>
  );
}
