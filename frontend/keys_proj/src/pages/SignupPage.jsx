import { useNavigate } from "react-router";
import { api } from "../utilities.jsx";
import { useState } from "react";

const SignupPage = () => {
    const [email, set_email] = useState("")
    const [password, set_password] = useState("")
    const [display_name, set_display_name] = useState("")

    const navigate = useNavigate();

    const signup = async (e) => {
        e.preventDefault();
        const data = { email, password, display_name };
        const response = await api
            .post("v1/users/signup", data)
            .catch(err => console.log(`signup error ${err}`));
        
        const user_email = response.data.email;
        const token = response.data.token;
        const username = response.data.username;

        console.log(`signup success: email: ${user_email}, token: ${token}, display name: ${display_name}`);

        api.defaults.headers.common["Authorization"] = `Token ${token}`
        localStorage.setItem("token", token);
        localStorage.setItem("email", user_email);

        navigate("/preferences");
    }

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
                    onChange={(e) => set_display_name(e.target.value)}
                    className="signup_input"
                    />
                    <input
                    type="text"
                    placeholder="email"
                    onChange={(e) => set_email(e.target.value)}
                    className="signup_input"
                    />
                    <input
                    type="text"
                    placeholder="password"
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