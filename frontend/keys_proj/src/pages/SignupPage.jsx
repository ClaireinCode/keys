import { useNavigate, useOutletContext } from "react-router";
import { api } from "../utilities.jsx";
import { useState, useEffect } from "react";

const SignupPage = () => {
    const [email, set_email] = useState("")
    const [password, set_password] = useState("")
    const [display_name, set_display_name] = useState("")
    const {user, setUser} = useOutletContext()

    const navigate = useNavigate();

    const signup = async (e) => {
        e.preventDefault();
        const data = { email, password, display_name };
        const response = await api
            .post("users/signup/", {
                "email":email,
                "password":password,
                "display_name":display_name
            })
            if (response.status === 201){
                setUser(response.data.user);
                localStorage.setItem("token", response.data.token)
                api.defaults.headers.common["Authorization"] = `Token ${response.data.token}`
                navigate("/preferences");
                
            }else {
                alert("Sign up failed!");
                navigate("/")
            }
        
        // const user_email = response.data.email;
        // const token = response.data.token;
        // const username = response.data.username;

        // console.log(`signup success: email: ${user_email}, token: ${token}, display name: ${display_name}`);

        // api.defaults.headers.common["Authorization"] = `Token ${token}`
        // localStorage.setItem("token", token);
        // localStorage.setItem("email", user_email);
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
                    value={display_name}
                    onChange={(e) => set_display_name(e.target.value)}
                    className="signup_input"
                    />
                    <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => set_email(e.target.value)}
                    className="signup_input"
                    />
                    <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => set_password(e.target.value)}
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