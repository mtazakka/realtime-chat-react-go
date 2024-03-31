'use client'

import Navbar from '../component/navbar/navbar'
import { useCheckTokenOut, useCheckTokenIn } from '../component/utils/checkToken'
import UserList from '../component/fragment/userList';
import { useRouter } from 'next/navigation'; // Menggunakan useRouter dari next/navigation

const Home = () => {
  const tokenChecked = useCheckTokenOut(); // Menggunakan hook useCheckTokenOut() untuk menandai apakah pengecekan token sudah selesai

  // Render komponen setelah pengecekan token selesai
  return tokenChecked ? (
    <>
      <Navbar />
      <UserList />
    </>
  ) : null;
};

export default Home;