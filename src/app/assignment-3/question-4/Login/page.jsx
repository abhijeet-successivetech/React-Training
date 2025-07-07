import { AuthProvider } from "@/component/assignment-3/AuthContext";
import Login from "@/component/assignment-3/Login";

const LoginPage = () => {
  return (
    <>
      <AuthProvider>
        <Login />
      </AuthProvider>
    </>
  );
};
export default LoginPage;