import React from "react";
import FormInput from "../FormInput/index";
import Button from "../button/button"

const FormLogin = () => {
  return (
    <div>
      <form action="#" className="text-sm">
        <FormInput type="fullname" id="fullname" placeholder="Fullname" name="fullname"> 
          Enter your name
        </FormInput>
        <FormInput type="email" id="email" placeholder="Email" name="email"> 
          Enter your email
        </FormInput>
        <FormInput type="password" id="password" placeholder="Password" name="password"> 
          Enter your password
        </FormInput>
        <Button type="submit" color="bg-blue-500" size="block w-full">Sign Up</Button>
        
      </form>
    </div>
  );
};

export default FormLogin;
