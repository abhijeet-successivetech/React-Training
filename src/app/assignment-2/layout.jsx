import Link from "next/link";
import "../globals.css";
import data from "./data";

export default function AssignmentTwoLayout({ children }) {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          minWidth: "12rem",
          padding: "10px",
          backgroundColor: "#f4f4f4",
          borderRadius: "8px",
          justifySelf:"flex-start",
          textAlign:'center'
        }}
      >
        {data.map((item, index) => (
          <div key={index}>
            <Link href={item.url}>{item.name}</Link>
          </div>
        ))}
      </div>

      <div
        style={{
          width:"80%",
          padding: "20px",
        }}
      >
        {children}
      </div>
    </div>
  );
}
