"use client";
import useLocalStorage from "@/hooks/useLocalStorage";

const ManageLocalStorage = () => {
  const { getValue, setValue, remove } = useLocalStorage("AuthType", "Admin");

  const handleSet = () => setValue("Student");
  const handleRemove = () => remove();

  return (
    <div className="container-center">
      <h2>Auth Type: {getValue()}</h2>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <button
          onClick={handleSet}
          className="button-primary"
        >
          Set AuthType
        </button>

        <button
        className="button-primary"
          style={{
          backgroundColor: "#dc3545" }}
          onClick={handleRemove}
          
        >
          Remove AuthType
        </button>
      </div>
    </div>
  );
};
export default ManageLocalStorage;
