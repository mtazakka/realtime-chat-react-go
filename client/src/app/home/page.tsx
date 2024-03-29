"use client"
// page Home

import Navbar from '../component/navbar/navbar'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import {useCheckTokenOut} from '../component/utils/checkToken'
import UserList from '../component/fragment/userList';


const Home = () => {
    useCheckTokenOut()
  return (
    <>
      <Navbar />
      <UserList />
    </>
  )
}

export default Home