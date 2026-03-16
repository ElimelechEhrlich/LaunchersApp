import { Route, Routes, useNavigate } from "react-router";
// import data from '../src/pages/db.json' with {type: "json"}
import AddLauncher from "./pages/AddLauncher";
import Home from "./pages/Home";
import LauncherDetails from "./pages/LauncherDetails";
import { useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch.js";

export default function App() {
  const [launchers] = useFetch("http://localhost:3000/api/launchers");
  const [idForDetailsPage, setIdForDetailsPage] = useState(null)
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/home')
  },[])
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home launchers={launchers} setIdForDetailsPage={setIdForDetailsPage}/>} />
        <Route path="/add_launcher" element={<AddLauncher />} />
        <Route path="/launcher_details/:id" element={<LauncherDetails idForDetailsPage={idForDetailsPage} />} />
      </Routes>
    </>
  )
}
