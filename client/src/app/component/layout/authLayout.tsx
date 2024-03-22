import Link from "next/link";
import React from "react";

const authLayout = (props: any) => {
  const { type, children, title } = props;
  return (
    <>
      <div className="max-w-80 w-full px-8 py-6 bg-white shadow-lg overflow-hidden sm:rounded-lg">
        <h1 className="text-2xl font-sans mb-6">{title}</h1>
        <h1 className="text-2xl font-bold font-sans text-gray-600 mt-4 mb-4 text-center">
        {type}
        </h1>
        {children}
        <Navigation type={type} />
      </div>
    </>
  );
};

export default authLayout;

function Navigation(props: any) {
  const { type } = props;
  if (type === "login") {
    return (
      <>
        <p className="text-center font-semibold text-sm">
          dont have an account? register{" "}
          <Link href="/register" className="text-blue-500">
            here
          </Link>
        </p>
      </>
    );
  } else {
    return (
      <>
        <p className="text-center font-semibold text-sm">
          already have an account? login{" "}
          <Link href="/login" className="text-blue-500">
            here
          </Link>
        </p>
      </>
    );
  }
}
