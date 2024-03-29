"use client"
// page Home

import Navbar from '../component/navbar/navbar'
import {useCheckTokenIn} from '../component/utils/checkToken'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


const Home = () => {
  // useCheckTokenIn()
  return (
    <>
      <Navbar />
    </>
  )
}

export default Home