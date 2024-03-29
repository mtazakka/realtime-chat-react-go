import Image from "next/image";
import Button from "./component/button/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <a href="/register" className="text-white bg-blue-400 rounded-lg px-4 py-2" >Register</a>
      <a href="/login" className="text-white bg-green-400 rounded-lg px-4 py-2">Login</a>
      <a href="/home" className="text-white bg-orange-400 rounded-lg px-4 py-2">Home</a>
    </main>
  );
}
