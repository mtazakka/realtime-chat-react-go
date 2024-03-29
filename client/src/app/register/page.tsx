'use client'

import FormRegister from "../component/fragment/FormRegister";
import AuthLayout from "../component/layout/authLayout";
import {useCheckTokenOut} from '../component/utils/checkToken'


const Register = () => {
  useCheckTokenOut()
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 h-screen">
        <div className="col-span-1 bg-green-200 p-4 md:p-8">
          <AuthLayout type="register" title="Welcome to Realtime Chat App!">
            <FormRegister />
          </AuthLayout>
        </div>
        <div
          className="col-span-2 bg-cover bg-center hidden md:block"
          style={{
            backgroundImage: "url('/image/ss.jpeg')",
          }}
        ></div>
      </div>
    </>
  );
};

export default Register;
