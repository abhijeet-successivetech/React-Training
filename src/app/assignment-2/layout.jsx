import Link from "next/link";
import "../globals.css";
import data from "./data";

export default function AssignmentTwoLayout({ children }) {
  return (
    <div>
      <div>
        {data.map((item, index) => (
          <div key={index} style={{ display: "inline-block", marginRight: "10px" }}>
            <Link href={item.url}>{item.name}</Link>
            
          </div>
        ))}
        {children}
      </div>
    </div>
  );
}
