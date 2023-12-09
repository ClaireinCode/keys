import { useNavigate, useOutletContext } from "react-router";
import { api } from "../utilities.jsx";
import { useState, useEffect } from "react";

const SignupPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [displayName, setDisplayName] = useState("")
    const {user, setUser, setIsLoggedIn} = useOutletContext()

    const navigate = useNavigate();

    const signup = async (e) => {
        e.preventDefault();
        // const data = { email, password, display_name };
        const response = await api
            .post("users/signup/", {
                "email":email,
                "password":password,
                "display_name":displayName
        })
        if (response.status === 201){
            setUser(response.data.user);
            localStorage.setItem("token", response.data.token)
            api.defaults.headers.common["Authorization"] = `Token ${response.data.token}`
            setIsLoggedIn(true)
            navigate("/preferences");
        }else {
            alert("Sign up failed!");
            navigate("/")
        }
    }

    useEffect(() => {
        if (user) {
            navigate("/houses")
        }
    })

    return (
        <>
        <div id='signup_div'>
            <div id='form_div'>
                <form onSubmit={(e)=>signup(e)} id='signup_form'>
                    <h2 id="signup_title">Create an Account</h2>
                    <div id="signup_title_div"></div>
                    <input
                    type="text"
                    placeholder="display name"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="signup_input"
                    />
                    <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="signup_input"
                    />
                    <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="signup_input"
                    />
                    <input type="submit" value="Create" id='signup_button'/>             
                </form>
            </div>
        </div>
        </>
    )
}
export default SignupPage