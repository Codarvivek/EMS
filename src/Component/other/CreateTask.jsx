import React from 'react'

const CreateTask = () => {
  return (
    <div className="p-5 bg-slate-900 mt-5 rounded">
    <form className="flex w-full flex-wrap items-start justify-between">
      <div className="w-1/2">
      <div>
        <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
        <input type="text" placeholder="Make UI design" className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"></input>
      </div>
     
      <div>
        <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
        <input type="date" className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"></input>
      </div>
      <div>
        <h3 className="text-sm text-gray-300 mb-0.5">Asign To</h3>
        <input type="text" placeholder="Employee Name" className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"></input>
      </div>
      <div>
        <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
        <input type="text" placeholder="design, dev, etc" className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"></input>
      </div>
      </div>
      <div className="w-1/2 flex flex-col items-start">
        <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
        <textarea className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"></textarea>
        <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">Create Task</button>
      </div>
     
      
    </form>
  </div>
  )
}

export default CreateTask
