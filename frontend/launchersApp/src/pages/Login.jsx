import { useRef, useState } from "react"
import { login } from "../api/auth.ts"
import { Navigate, useNavigate } from "react-router"


export default function Login() {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const authRef = useRef({ agentCode: "", password: "" })
  function handleChange(key, value) {
    authRef.current[key] = value
    console.log(authRef);

  }
  async function handleSubmit(e) {
    e.preventDefault();
    const { agentCode, password } = authRef.current;
    if (agentCode && password) {
      const response = await login(authRef.current); 
      console.log(response);
      if (response && 'token' in response && 'user' in response) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        if (response.user.role === 'Admin') {navigate('/admin/dashboard', { replace: true })}
        else if (response.user.role === 'Agent') {navigate('/agent/dashboard', { replace: true })};
        console.log(localStorage);
      } else {
        setError(JSON.stringify(response))
      }
    }
  }
  return (
    <div className="flex justify-center items-center w-full h-screen bg-linear-to-br from-cyan-400
     to-cyan-950">
      <div className="justify-around w-[30%] h-[50%] shadow-2xl p-4 gap-4 border border-black rounded-4xl flex flex-col justify-center items-center bg-linear-to-br to-cyan-100
     from-cyan-400">
        <h2 className="font-bold text-3xl mb-4">login</h2>
        <div className="flex flex-col">
        <label className="self-start" htmlFor="">agentCode</label>
        <input className="border rounded " onChange={e => handleChange("agentCode", e.target.value)} type="text" placeholder="enter your agentCode" />
        </div>
        <div className="flex flex-col">
        <label className="self-start" htmlFor="">password</label>
        <input className="border rounded " onChange={e => handleChange("password", e.target.value)} type="text" placeholder="enter your password" />
        </div>
        <button onClick={handleSubmit} className="mt-5 border cursor-pointer p-2 rounded-4xl bg-cyan-700 hover:bg-cyan-900  px-4">send</button>
        <h2 className="text-red-600">{error}</h2>
      </div>
    </div>
  )
}


