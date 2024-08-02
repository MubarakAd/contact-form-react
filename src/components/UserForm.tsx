import React from 'react'
import {useForm} from 'react-hook-form'
import { DevTool } from '@hookform/devtools';

const Form = () => {
  const form =useForm<Form>();
  const {register,handleSubmit,formState}=form;
  const {errors}=formState
  type Form={
    userName:"string"
    email:"string"
    message:"string"

  }
  let onsubmit=(data:Form)=>{
    
   

  }
  return (
    <div >
        <form onSubmit={handleSubmit(onsubmit)} action="" >
        <h1>Contact Form</h1>
          <div className='control'>
            
            <label htmlFor="userName">UserName</label>
            <input  id="userName" type="text" placeholder='Enter Your Name' {...register("userName",{
              required:{
                value:true,
                message:"userName is a required"

              }
            })} />
            <p className='errors'>{errors.userName?.message}</p>

            <label htmlFor="email">Email</label>
            </div>
            <div className='control'>
            <input
  type="text"
  id="email"
  placeholder="Enter Your Email"
  {...register("email", {
    pattern: {
      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      message: "Email is invalid",
    },
    validate: {
      checkNotAdmin: (fieldValue:string) => 
        fieldValue !== "admin@a2sv.org" || "This is only for admin,Enter Correct Email",
      endsWith: (fieldValue) =>
        fieldValue.endsWith("@a2sv.org") || "Enter valid Email format"
    }
  })}
/>
<p className='errors'>{errors.email?.message}</p>
</div>
<div className='control'>
            <label htmlFor="message">Message</label>
            <input type="text" id='message' placeholder='Enter Your Message' {...register("message",{
              required:{
                value:true,
                message:"message is required"
              }
            })}/>
            <p className='errors'>{errors.message?.message}</p>
            </div>
            <button>Submit</button>
            

        </form>
    </div>
  )
}

export default Form