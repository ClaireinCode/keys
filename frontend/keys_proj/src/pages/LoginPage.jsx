import { api } from "../utilities.jsx";
import { useNavigate, useOutletContext } from "react-router";
import { useState, useEffect } from "react";

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {user, setUser, isLoggedIn, setIsLoggedIn} = useOutletContext()

    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();
        let response = await api.post("users/login/", {
            'email': email,
            'password': password,
        });
        if (response.status === 201) {
            setUser(response.data.user);
            localStorage.setItem("token", response.data.token);
            api.defaults.headers.common["Authorization"] = `Token ${response.data.token}`;
            setIsLoggedIn(true)
            navigate("/houses");
        }
        else {
            alert("Login failed!")
            navigate("/login")
        }      
    }

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/houses")
        }
    })

    return (
        <>
        <div id='login_div'>
            <div id='form_div'>
                <form onSubmit={(e)=> login(e)} id='login_form'>
                    <h2 id="login_title">Log In</h2>
                    <div id="login_title_div"></div>
                    <input
                    type="text"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="login_input"
                    />
                    <input
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="login_input"
                    />
                    <input type="submit" value="Log In" id='login_button'/>             
                </form>
            </div>
        </div>
        </>
    )
}
export default LoginPage