import Sidebar from "@/component/assignment-4/Sidebar";

export default function AssignmentFourLayout({children}) {

    return(
        <div className="flex">
            <Sidebar />
             <main>{children}</main> 
            
        </div>
         
        )
}