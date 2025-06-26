import { AuthProvider } from "@/component/assignment-3/AuthContext";

export default function AuthLayout({ children }) {
  return (
    <div>
      <AuthProvider> {children}</AuthProvider>
    </div>
  );
}