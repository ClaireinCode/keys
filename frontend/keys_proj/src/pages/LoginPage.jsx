import { api } from "../utilities.jsx";
import { useNavigate, useOutletContext } from "react-router";
import { useState, useEffect } from "react";

const LoginPage = () => {
    const [email, set_email] = useState("")
    const [password, set_password] = useState("")
    const {user, setUser} = useOutletContext()

    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();
        let response = await api.post("users/login/", {
            'email': email,
            'password': password,
        });
        if (response.status === 200) {
            setUser(response.data.user);
            localStorage.setItem("token", response.data.token);
            api.defaults.headers.common["Authorization"] = `Token ${response.data.token}`;
            navigate("/houses");
        }
        else {
            alert("Login failed!")
            navigate("/login")
        }
        // console.log(response);
        // let token = response.data.token;
        // let user = response.data.users;

        
        // setUser(user);
        
    }

    useEffect(() => {
        if (user) {
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
                    onChange={(e) => set_email(e.target.value)}
                    className="login_input"
                    />
                    <input
                    type="text"
                    placeholder="password"
                    onChange={(e) => set_password(e.target.value)}
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