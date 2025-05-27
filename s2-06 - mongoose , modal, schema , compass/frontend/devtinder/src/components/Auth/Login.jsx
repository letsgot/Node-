import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slicers/userSlice";
import { useNavigate } from "react-router-dom";
const baseUrl = import.meta.env.VITE_APP_BASE_URL;


const Login = () => {
    let [input, setInput] = useState("hardik@gmail.com");
    let [password, setPassword] = useState("Admin@123");
    let dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = async () => {
        try {
            let res = await axios.post(`${baseUrl}auth/login`, {
                inputValue: input,
                password
            }, { withCredentials: true });
            dispatch(setUser(res?.data?.user));
            navigate('/');
        } catch (error) {
            console.log(error, "Error")
        }
    }
    return (
        <div className='flex justify-center items-center mt-10'>
            <div className="card bg-base-300 w-96 shadow-sm">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Login</h2>
                    <fieldset className="fieldset w-60">
                        <legend className="fieldset-legend text-left">Mobile / Email</legend>
                        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" className="input" placeholder="Type here" />
                    </fieldset>
                    <fieldset className="fieldset w-60">
                        <legend className="fieldset-legend text-left">Password</legend>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="input" placeholder="Type here" />
                    </fieldset>
                    <div className="card-actions mt-2">
                        <button onClick={() => handleLogin()} className="btn btn-primary">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login