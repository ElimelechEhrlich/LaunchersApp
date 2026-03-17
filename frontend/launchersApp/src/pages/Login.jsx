import { useRef, useState } from "react"
import { login } from "../api/auth.js"
import { Link } from "react-router"


export default function Login() {
    const [error, setError] = useState('')
    const authRef = useRef({ username: "", password: "" })
    function handleChange(key, value) {
        authRef.current[key] = value
        console.log(authRef);

    }
    async function handleSubmit(e) {
        e.preventDefault();
        const { username, password } = authRef.current;
        if (username && password) {
            const response = await login(authRef.current);
            console.log(response);
            if (response && ('token' in response) && ('user' in response)) {
                localStorage.setItem('token', response.token);
                localStorage.setItem('user', JSON.stringify(response.user));
                console.log(localStorage);
            } else {
                setError(JSON.stringify(response))
            }
        }
    }
    return (
        <div className="flex justify-center items-center w-full h-screen bg-linear-to-br from-cyan-400
     to-cyan-950">
            {(localStorage.getItem('token')) ? <div className="justify-around w-[30%] h-[50%] shadow-2xl p-4 gap-4 border border-black rounded-4xl flex flex-col items-center bg-linear-to-br to-cyan-100
     from-cyan-400">
                <h2 className="font-bold text-3xl mb-4">login</h2>
                <div className="flex flex-col">
                    <label className="self-start" htmlFor="">username</label>
                    <input className="border rounded " onChange={e => handleChange("username", e.target.value)} type="text" placeholder="enter your username" />
                </div>
                <div className="flex flex-col">
                    <label className="self-start" htmlFor="">password</label>
                    <input className="border rounded " onChange={e => handleChange("password", e.target.value)} type="text" placeholder="enter your password" />
                </div>
                <button onClick={handleSubmit} className="mt-5 border cursor-pointer p-2 rounded-4xl bg-cyan-700 hover:bg-cyan-900  px-4">send</button>
                <h2 className="text-red-600">{error}</h2>
            </div>
                : <div>
                    <h2 className="text-green-800">You have successfully connected!<Link to={'/Home'}>Home</Link></h2>
                </div>}
        </div>

    )
}



