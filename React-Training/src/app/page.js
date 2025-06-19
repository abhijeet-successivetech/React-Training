import fs from "fs";
import path from "path";
import Link from "next/link";

export default function HomePage() {
  const appDir = path.join(process.cwd(), "src/app");
  const assignments = fs
    .readdirSync(appDir)
    .filter((folder) => folder.toLowerCase().startsWith("assignment-"));

  return (
    <main style={{ padding: "2rem" }}>
      <h1>All Assignments</h1>

      {assignments.map((assignment) => {
        const assignmentPath = path.join(appDir, assignment);
        const questions = fs
          .readdirSync(assignmentPath)
          .filter((q) => q.toLowerCase().startsWith("question-"));

        return (
          <div key={assignment}>
            <h2>{assignment}</h2>
            <ul>
              {questions.map((q) => (
                <li key={q}>
                  <Link href={`/${assignment}/${q}`}>
                    {`${assignment} - ${q}`}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </main>
  );
}
