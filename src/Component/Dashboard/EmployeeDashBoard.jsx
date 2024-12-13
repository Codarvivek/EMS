import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashBoard = ({data}) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
     
      <Header data={data}></Header>
      <TaskListNumber data={data}></TaskListNumber>
      <TaskList data={data}></TaskList>
    </div>
  )
}

export default EmployeeDashBoard
