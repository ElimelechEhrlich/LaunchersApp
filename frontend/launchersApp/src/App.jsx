import { Route, Routes } from "react-router";
import data from '../src/pages/db.json' with {type: "json"}
import AddLauncher from "./pages/AddLauncher";
import Home from "./pages/Home";
import LauncherDetails from "./pages/LauncherDetails";
import { useState } from "react";

export default function App() {
  const [launchers, setLaunchers] = useState(data)
  return (
    <>
      <Routes>
        <Route path="/" element={<Home launchers={launchers} />}/>
        <Route path="/add_launcher" element={<AddLauncher />}/>
        <Route path="/launcher_details" element={<LauncherDetails launchers={launchers} />}/>
      </Routes>
    </>
  )
}
