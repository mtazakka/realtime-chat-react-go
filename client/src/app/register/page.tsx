import FormRegister from "../component/fragment/FormRegister";

const Register = () => {
  return (
    <>
      <div className="flex items-center min-h-screen justify-center bg-green-100">
            <div className="max-w-80 w-full px-8 py-6 bg-white shadow-lg overflow-hidden sm:rounded-lg">
                <h1 className="text-lg font-light text-gray-800 font-serif">Welcome to Realtime Chat App!</h1>
                <h2 className="text-xs font-bold text-gray-600 mt-4 mb-4 text-center">Create an account</h2>
                <FormRegister/>
            </div>
        </div>
    </>
  );
};

export default Register;
