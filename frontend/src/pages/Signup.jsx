import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { toast } from 'sonner';

const schema = z.object({
    name : z.string().min(1, "Name is Required").max(40, "Name can not exceed 40 characters") ,
    email : z.string().email("Email is requied"),
    phone : z.string().min(10 , "Phone is required") ,
    password : z.string().min(8, "Password is too short").regex(/[0-9]/,"Password must contain a Number").regex(/[a-z]/ , "Password must have one lowercase").regex(/[A-Z]/,
    "Password must contain uppercase").regex(/[\w_]/,"Password must contain a speacial symbol")


}) 

function Signup() {
  console.log(useForm());
  const { handleSubmit, register ,formState:{errors} } = useForm({
    resolver : zodResolver(schema)
  });

  console.log(errors)

  const onSubmit = async (data) => {
   try {
     // console.log(data);
    const res = await axios.post('http://localhost:3000/api/register',data)
    console.log(res)
    toast.success("User successfully registered")
   } catch (error) {
    console.log(error)
    toast.error(error.response.data.message)
   }
  };


  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-6 w-[25rem] shadow-lg rounded-md">
        <h1 className="text-black font-bold text-3xl text-center m-2">
          Signup
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="block" htmlFor="Name">
            Name
          </label>
          <input
            className="input_field"
            type="text"
            {...register('name',{ required: true, maxLength: 20 })}
          />
          <label className="block" htmlFor="Name">
            Email
          </label>
          <input
            className="input_field"
            type="email"
            {...register('email')}
          />
          <label className="block" htmlFor="Name">
            Phone
          </label>
          <input
            className="input_field"
            type="text"
            {...register('phone')}
          />
          <label className="block" htmlFor="Name">
            Password
          </label>
          <input
            className="input_field"
            type="password"
            {...register('password')}
          />
          {errors.password && <p className='text-red-500 font-semibold'>{errors.password.message}</p>}
          <button
            className="bg-black px-8 py-2 rounded-md w-full mt-3 text-white"
            type="submit"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;


//resolvers will convert the zod schema validation into react-hook-form validation