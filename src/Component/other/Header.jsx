import React from 'react'
import Login from '../Auth/Login'

const Header = ({data}) => {
  return (
    <div className='flex items-center justify-between '>
   
      <h1 className='text-2xl font-medium'>Hello<br/><span className='text-3xl font-semibold'>{data.first_name}</span></h1>
      <button className='bg-red-500 text-white px-5 py-2 rounded-s text-lg font-medium' 
       >Log Out</button>
    </div>
  )
}

export default Header
