import Sidebar from "@/component/assignment-4/Sidebar";

export default function AssignmentFourLayout({ children }) {
  return (
    <div style={{display:"flex"}}>
      <div className="">
        <Sidebar />
      </div>
      <div>{children}</div>
    </div>
  );
}
