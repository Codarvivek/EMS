import React, { useEffect, useState } from "react";
import Login from "./Component/Auth/Login";
import EmployeeDashBoard from "./Component/Dashboard/EmployeeDashBoard";
import AdminDashboard from "./Component/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./Utils/localStorage";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUser,setloggedInUser]=useState(null);
  const AuthData = useContext(AuthContext);
  console.log(AuthData);
  // useEffect(()=>{
    
  //   if(AuthData){
  //     const loggedInUser=localStorage.getItem("loggedInUser");
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // },[]);
  useEffect(() => {
    setLocalStorage();
    getLocalStorage();
  });

  const handleLogin = (email, password) => {
    if (AuthData && AuthData.admin.find((e)=>email==e.email && password==e.password)) {
      setUser("admin");
      localStorage.setItem('loggedInUser',JSON.stringify({'role':'admin'}))
    } else if (AuthData) {
      const employee=AuthData.employees.find((e) => email == e.email && password == e.password)
      if(employee){
      setUser("employee");
      setloggedInUser(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({'role':'employee'}))
      }
    } else {
      alert("Wrong Id or password");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin}></Login> : ""}
      {user == "admin" ? <AdminDashboard data={loggedInUser}/> :(user == 'employee'?<EmployeeDashBoard data={loggedInUser}/>:null)}
      {}
    </>
  );
}

export default App;
