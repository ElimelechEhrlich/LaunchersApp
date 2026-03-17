import { Route, Routes, useNavigate } from "react-router";
// import data from '../src/pages/db.json' with {type: "json"}
import AddLauncher from "./pages/AddLauncher";
import Home from "./pages/Home";
import LauncherDetails from "./pages/LauncherDetails";
import { useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch.js";
import Login from "./pages/Login.jsx";
import Navbar from "./comps/Navbar.jsx";

export default function App() {
  const launchers = useFetch("http://localhost:3000/api/launchers", {body: {username:"eli", password:1234}});
  const [idForDetailsPage, setIdForDetailsPage] = useState(null)

  const navigate = useNavigate()
  useEffect(() => {
    navigate('/home')
  },[])

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/home" element={<Home launchers={launchers} setIdForDetailsPage={setIdForDetailsPage}/>} />
        <Route path="/add_launcher" element={<AddLauncher />} />
        <Route path="/launcher_details/:id" element={<LauncherDetails idForDetailsPage={idForDetailsPage} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}
