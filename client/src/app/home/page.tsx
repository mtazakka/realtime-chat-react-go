"use client"
// page Home

import Navbar from '../component/navbar/navbar'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import {useCheckTokenOut} from '../component/utils/checkToken'


const Home = () => {
    useCheckTokenOut()
  return (
    <>
      <Navbar />
    </>
  )
}

export default Home