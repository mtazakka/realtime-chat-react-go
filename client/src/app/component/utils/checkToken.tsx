"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";


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
export function useCheckTokenOut() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Not allowed!");
      router.push('/NoAuthorized');
    } 
  }, [router]);
}








