"use client";

import FormRegister from "../component/fragment/FormRegister";
import AuthLayout from "../component/layout/authLayout";
import { useCheckTokenIn } from "../component/utils/checkToken";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

function Register(){
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
  
  // if (cekToken === false) { // Render halaman registrasi hanya jika token belum diperiksa atau tidak ada
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 h-screen">
        <div className="col-span-1 bg-green-200 p-4 md:p-8">
          <AuthLayout
            type="register"
            title="Welcome to Realtime Chat App!"
          >
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
  
}
export default Register;


// useEffect(() => {
  //   if(affectRan.current === false){
  //     const token = localStorage.getItem("token");
  //     if (token) {
  //       alert("Please login first");
  //       router.push('/NoAuthorized')
  //     }
  //   return ()=> {
  //     affectRan.current = true
  //   }}
  // }, [])