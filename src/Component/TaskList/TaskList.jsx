import React from 'react'
import Card from './Card/Card'
import AccepetTask from './AccepetTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const  TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full  mt-10 py-5'>
     { data.tasks.map((e)=>{
        // if(e.active){
        //   return <AccepetTask></AccepetTask>
        // // }
        // if(e.new_task){
        //   return <NewTask></NewTask>
        // }
        // if(e.failed){
        //   return <FailedTask></FailedTask>
        // }
        if(e.completed){
          return <CompleteTask></CompleteTask>
        }
      })}
     
    </div>
  )
}

export default TaskList
