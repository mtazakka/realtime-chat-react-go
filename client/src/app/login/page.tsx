"use client";

import FormLogin from "../component/fragment/FormLogin";
import AuthLayout from "../component/layout/authLayout";
import { useCheckTokenIn } from "../component/utils/checkToken";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  // useCheckTokenIn()
  const affectRan = useRef(false);
  const router = useRouter();
  // const cekToken = useCheckTokenIn();
  // console.log(cekToken)
  useEffect(() => {
      if(affectRan.current === false){
        const token = localStorage.getItem("token");
        if (token) {
          alert("Not Allowed");
          router.push('/NoAuthorized')
        }
      return ()=> {
        affectRan.current = true
      }}
    }, [])

  return (
    <>
      <div
        className="flex items-center min-h-screen justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/image/bglogin.jpeg')",
        }}
      >
        <AuthLayout type="login">
          <FormLogin />
        </AuthLayout>
      </div>
    </>
  );
};

export default Login;
