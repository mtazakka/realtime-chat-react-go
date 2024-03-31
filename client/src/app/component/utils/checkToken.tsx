"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";

// CheckTokenIn untuk kondisi dimana
// user sudah login dan ingin akses ke page yang harusnya bisa diakses di kondisi belum login
export function useCheckTokenIn() {
  const router = useRouter();
  const [tokenChecked, setTokenChecked] = useState(true);
  const affectRan = useRef(false);

  useEffect(() => {
    if (affectRan.current === false) {
      const cekToken = () => {
        const token = localStorage.getItem("token");
        if (token) {
          alert("not Allowed");
          router.push("/NoAuthorized");
        } else {
          setTokenChecked(false); // Tandai bahwa pengecekan token sudah dilakukan
        }
        cekToken();
        return () => {
          affectRan.current = true;
        }; // Set ref ke true agar hanya dijalankan sekali saat mounting
      };
    }
  }, []);

  return tokenChecked;
}

// CheckTokenOut untuk kondisi dimana
// user belum login dan ingin akses ke page yang mengharuskan sudah login
export function useCheckTokenOut() {
  const router = useRouter();
  const [tokenChecked, setTokenChecked] = useState(false); // State untuk menandai apakah pengecekan token sudah selesai

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/NoAuthorized");
    } else {
      // Jika token tersedia, tandai pengecekan token sebagai selesai
      setTokenChecked(true);
    }
  }, [router]); // Dependensi hanya router, karena hanya diperlukan sekali saat komponen di-mount
  // Kembalikan nilai tokenChecked agar dapat digunakan di komponen Home
  return tokenChecked;
}
