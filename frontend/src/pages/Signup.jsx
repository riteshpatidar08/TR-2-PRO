import React from 'react'
import { useForm } from 'react-hook-form'

function Signup() {
    console.log(useForm())
   const {handleSubmit, register} = useForm()


   const onSubmit = (data) => {
    console.log(data)
}

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='Name'>Name</label>
        <input type='text' {...register('name')}  />
        <label htmlFor='Name'>Email</label>
        <input type='email' {...register('email')}  />
        <label htmlFor='Name'>phone</label>
        <input type='text' {...register('phone')}  />
        <label htmlFor='Name'>Name</label>
        <input type='password' {...register('password')}  />
        <button type='submit'>Signup</button>
      </form>
    </div>
  )
}

export default Signup
