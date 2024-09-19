import React from 'react';
import { useForm } from 'react-hook-form';

function Signup() {
  console.log(useForm());
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
            {...register('name')}
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
          <button
            className="bg-blue-500 px-8 py-2 rounded-md w-full mt-3 text-white"
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
