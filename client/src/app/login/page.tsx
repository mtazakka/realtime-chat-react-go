import FormLogin from "../component/fragment/FormLogin";
import AuthLayout from "../component/layout/authLayout";

const Login = () => {
  return (
    <>
      <div className="flex items-center min-h-screen justify-center bg-green-100">
            <AuthLayout type="login">
              <FormLogin/>
            </AuthLayout>
        </div>
    </>
  );
};

export default Login;

