import { Route, Routes } from "react-router";
import AddLauncher from "./pages/AddLauncher";
import Home from "./pages/Home";
import LauncherDetails from "./pages/LauncherDetails";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/add_launcher" element={<AddLauncher />}/>
        <Route path="/launcher_details" element={<LauncherDetails/>}/>
      </Routes>
    </>
  )
}
