import React from "react";
import FormInput from "../FormInput/index";
import Button from "../button/button"

const FormLogin = () => {
  return (
    <div>
      <form action="#" className="text-sm">
        <FormInput type="email" id="email" placeholder="Email" name="email"> 
          Enter your email
        </FormInput>
        <FormInput type="password" id="password" placeholder="******" name="password"> 
          Enter your password
        </FormInput>
        <Button type="submit" color="bg-blue-500 mb-4 mt-4" size="block w-full">Login</Button>
      </form>
    </div>
  );
};

export default FormLogin;
