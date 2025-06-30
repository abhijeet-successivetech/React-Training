import Link from "next/link";
import "../globals.css";
import data from "./data";

export default function AssignmentTwoLayout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          minWidth: "150px",
          padding: "10px",
          backgroundColor: "#f4f4f4",
          borderRadius: "8px",
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
          flex: 1,
          padding: "20px",
        }}
      >
        {children}
      </div>
    </div>
  );
}
