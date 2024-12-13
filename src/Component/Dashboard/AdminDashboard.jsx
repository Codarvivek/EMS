import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = ({data}) => {
  return (
    <div className="h-screen w-full p-10 bg-slate-950">
      <Header data={data}></Header>
      <CreateTask></CreateTask>
      <AllTask></AllTask>
    </div>
  );
};

export default AdminDashboard;
