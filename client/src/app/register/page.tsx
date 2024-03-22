import ReactDOM from "react-dom";
import FormRegister from "../component/fragment/FormRegister";
import AuthLayout from "../component/layout/authLayout";

const Register = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-1/3 bg-gray-100 p-8">
          <AuthLayout type="register" title="Welcome to Realtime Chat App!">
            <FormRegister />
          </AuthLayout>
        </div>
        <div
          className="w-2/3 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
          }}
        >
          {/* <FontAwesomeIcon icon="fa-sharp fa-light fa-comments" /> */}
          <div className="h-full flex items-center justify-center">
            <div className="text-white text-center">
              <h1 className="text-4xl font-bold mb-4">
                Join Real Time Chat Now
              </h1>
              <p className="text-lg mb-8">
                Boost your productivity with easy time and task management.
              </p>
              <button className="bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-200">
                Get to know us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
