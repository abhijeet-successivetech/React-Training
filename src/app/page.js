import data from './data'
import Link from "next/link";

export default function HomePage() {


  return (
    <>
    <h1>All Assignments</h1>
    <main style={{ padding: "2rem" }}>

      {data.map((item, index) => (
        <div key={index} style={{ display: "inline-block", marginRight: "10px" }}>
          <Link href={item.url}>{item.name}</Link>
        </div>
      ))}
    </main>
    </>
  );
}
