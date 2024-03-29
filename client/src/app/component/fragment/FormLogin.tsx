"use client";
// page Login
import React from "react";
import FormInput from "../FormInput/index";
import Button from "../button/button";
import { useState } from "react";
import { useRouter } from 'next/navigation'; // Add this line to import the router

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    

    if( !email || !password ){
      setLoginMessage("Please fill in all fields");
      return 
    }

    const data = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:9000/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        localStorage.setItem("token", responseData.token);
        alert("Login successful!");
        router.push('/home');
        
      } else {
        setLoginMessage("Login failed: email or password not match in database, try again");
      }
    } catch (error) {
      setLoginMessage("Error: " + error);
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="text-sm">
        <FormInput
          type="email"
          id="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
          required
        >
          Enter your email
        </FormInput>
        <FormInput
          type="password"
          id="password"
          placeholder="******"
          name="password"
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
          required
        >
          Enter your password
        </FormInput>
        <Button type="submit" color="bg-blue-500 mb-4 mt-4" size="block w-full" >
          Login
        </Button>
        <p id="login-message" className="text-center font-semibold text-sm mb-4 text-red-500">{loginMessage}</p>
      </form>
    </div>
  );
};

export default FormLogin;