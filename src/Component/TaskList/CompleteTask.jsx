import React from 'react'

const CompleteTask = () => {
  return (
    <div className='h-full w-[300px]  flex-shrink-0 bg-blue-500 rounded-xl p-5'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
        <h4>23-jan-2024</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
      <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, illum cumque numquam doloremque dolorum harum soluta unde. Sint ut facilis repellendus, asperiores expedita vitae quaerat sit eaque quod rem cupiditate!</p>
     
      <div className='mt-4'>
        <button>Completed Task</button>
      </div>
      </div>
  )
}

export default CompleteTask
