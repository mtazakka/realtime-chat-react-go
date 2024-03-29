'use client'

// NoAuthorized.js

import { useRouter } from "next/navigation";
import Button from "../component/button/button"; // Sesuaikan dengan path yang benar untuk komponen Button

const NoAuthorized = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.push('/login');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Not Authorized</h2>
        <p className="text-gray-600 mb-4">
          You are not authorized to access this page. Please login with proper credentials.
        </p>
        <Button onClick={handleGoBack} color="bg-blue-500 text-white hover:underline" type="button">Go Back</Button>
      </div>
    </div>
  );
};

export default NoAuthorized;
