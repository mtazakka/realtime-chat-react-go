'use client'
// page Register
import { useState } from "react";
import React from 'react'
import FormInput from '../FormInput/index'
import Button from '../button/button'
import Popup from '../PopUp/Popup';
import { useRouter } from 'next/navigation'; // Add this line to import the router
import Modal from "react-modal";
Modal.setAppElement('#__next');

const FormRegister = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [registerData, setRegisterData] = useState(null);
  const router = useRouter();
  const [loginMessage, setLoginMessage] = useState("");
  
  const handleRegister = async (event: any) => {
    event.preventDefault();
    if( !email || !firstName || !lastName || !password ){
      setLoginMessage("Please fill in all fields");
      return 
    }

    const data = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:9000/api/v1/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      if (response.ok) {
        setRegisterData(responseData);
        // Buka pop-up
        setIsOpen(true);
        // router.push('/login');
        
      } else {
        setLoginMessage("Register failed: " + responseData.message);
        // alert("Login failed: " + responseData.message);
      }
    } catch (error) {
      setLoginMessage("Error: " + error);
    }
  };
  const handleClosePopup = () => {
    setIsOpen(false);
    router.push('/login')
  };
  return (
    <div id="__next">
        <form action="#" className="text-sm">
        <FormInput type="email" id="email" placeholder="Email" name="email" value={email} onChange={(e: any) => setEmail(e.target.value)}> 
          Enter your email
        </FormInput>
        <FormInput type="text" id="firstName" placeholder="First Name" name="firstName" value={firstName} onChange={(e: any) => setFirstName(e.target.value)}> 
          Enter your first name
        </FormInput>
        <FormInput type="text" id="lastName" placeholder="Last Name" name="lastName" value={lastName} onChange={(e: any) => setLastName(e.target.value)}> 
          Enter your last name
        </FormInput>
        <FormInput type="password" id="password" placeholder="******" name="password" value={password} onChange={(e: any) => setPassword(e.target.value)}> 
          Enter your password
        </FormInput>
        <Button type="submit" color="bg-blue-500 mb-4 mt-4" size="block w-full" onClick={handleRegister}>Sign Up</Button>
        <p id="login-message" className="text-center font-semibold text-sm mb-4 text-red-500">{loginMessage}</p>
        <Popup isOpen={isOpen} onClose={handleClosePopup} data={registerData} />
      </form>
    </div>
  )
}

export default FormRegister