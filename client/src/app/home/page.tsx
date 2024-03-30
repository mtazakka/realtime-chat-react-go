"use client"
// page Home

import Navbar from '../component/navbar/navbar'
import { useCheckTokenOut } from '../component/utils/checkToken'
import UserList from '../component/fragment/userList';
import { useEffect, useState } from 'react';

// Define the Home component
// Define the Home component
const Home = () => {
  // Call the useCheckTokenOut hook to check the token
  useCheckTokenOut();

  const [tokenChecked, setTokenChecked] = useState(false); // State to track if token check is completed

  useEffect(() => {
    // Update state to indicate token check is completed
    setTokenChecked(true);
  }, []);

  // Render nothing until token check is completed
  if (!tokenChecked) {
    return null;
  } else {
    // Render Navbar and UserList once token check is completed
    return (
      <>
        <Navbar />
        <UserList />
      </>
    );
  }
};

// Export the Home component as default
export default Home;