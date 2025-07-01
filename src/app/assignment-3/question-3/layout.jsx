import { AuthProvider } from "@/component/assignment-3/AuthContext";

export default function AuthLayout({ children }) {
  return (
    <div className="container-center">
      <AuthProvider> {children}</AuthProvider>
    </div>
  );
}