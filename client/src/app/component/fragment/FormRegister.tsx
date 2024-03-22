import React from 'react'
import FormInput from '../FormInput/index'
import Button from '../button/button'


const FormRegister = () => {
  return (
    <div>
        <form action="#" className="text-sm">
        <FormInput type="fullname" id="fullname" placeholder="Fullname" name="fullname"> 
          Enter your name
        </FormInput>
        <FormInput type="email" id="email" placeholder="Email" name="email"> 
          Enter your email
        </FormInput>
        <FormInput type="password" id="password" placeholder="******" name="password"> 
          Enter your password
        </FormInput>
        <FormInput type="password" id="confirm-password" placeholder="******" name="confirm-password"> 
          confirm password
        </FormInput>
        <Button type="submit" color="bg-blue-500 mb-4 mt-4" size="block w-full">Sign Up</Button>
      </form>
    </div>
  )
}

export default FormRegister