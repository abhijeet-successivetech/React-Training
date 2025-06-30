"use client";
import useLocalStorage from "@/hooks/useLocalStorage";

const ManageLocalStorage = () => {
  const { getValue, setValue, remove } = useLocalStorage("AuthType", "Admin");

  const handleSet = () => setValue("Student");
  const handleRemove = () => remove();

  return (
    <div
      style={{
        padding: "1.5rem",
        margin: "0 auto",
        textAlign: "center",
        display: "flex",
        gap: "1rem",
      }}
    >
      <h2>Auth Type: {getValue()}</h2>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <button
          onClick={handleSet}
          style={{
            padding: "0.5rem",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Set AuthType
        </button>

        <button
          onClick={handleRemove}
          style={{
            padding: "0.5rem",
            backgroundColor: "#dc3545",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Remove AuthType
        </button>
      </div>
    </div>
  );
};
export default ManageLocalStorage;
