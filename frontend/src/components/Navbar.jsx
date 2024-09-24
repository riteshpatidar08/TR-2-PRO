import { Input } from '@mui/material'
import React from 'react'
import { CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useSelector } from 'react-redux';
function Navbar() {
   const name = localStorage.getItem("name")
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between p-5'>
<div>
<h1 className='text-2xl font-semibold'>Ecommerce</h1>
</div>

<div>
<input className='border border-black p-2 w-96' type='text' placeholder='Search'/>
</div>

<div className='flex gap-4'>
    <div className='flex items-center gap-2'>
    <HiOutlineShoppingBag />
<p>Cart</p>
</div>
<div className='flex items-center gap-2'>
<CiUser/>
<p>{`Welcome ${name}`}</p>
</div>
</div>
      </div>

      <div>

      </div>
    </div>
  )
}

export default Navbar
