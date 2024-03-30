"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


// CheckTokenIn untuk kondisi dimana 
// user sudah login dan ingin akses ke page yang harusnya bisa diakses di kondisi belum login
export function useCheckTokenIn() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Login first!");
      router.push("/login");
    } 
  }, [router]);
}


// CheckTokenOut untuk kondisi dimana 
// user belum login dan ingin akses ke page yang mengharuskan sudah login
// Define the custom hook to check token
export function useCheckTokenOut() {
  const router = useRouter(); // Initialize useRouter
  const [alertShown, setAlertShown] = useState(false); // State to track if alert has been shown

  useEffect(() => {
    const checkToken = async () => {
      // Get token from localStorage
      const token = localStorage.getItem("token");

      // If token doesn't exist and alert has not been shown yet, show alert and redirect
      if (!token && !alertShown) {
        setAlertShown(true); // Update state to indicate alert has been shown
        alert("Not allowed!");
        router.push('/NoAuthorized');
      }
    };

    checkToken();
    console.log(alertShown);

  }, [router, alertShown]); // Include router and alertShown in dependencies array

  // Return nothing from the hook
  return null;
}








