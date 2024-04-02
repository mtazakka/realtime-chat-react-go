import { useState} from "react";

export function useCheckTokenOut() {
  const token = localStorage.getItem("token");
  if (!token) {
      alert ("gagal")
      return false
    } 
  return true
}
