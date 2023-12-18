import { useNavigate, Link } from 'react-router-dom'
import { useOutletContext } from 'react-router'
import { useEffect } from 'react'

const ProfileAccountDetailsPage = () => {
    const {user, isLoggedIn} = useOutletContext()
    const navigate = useNavigate()

    useEffect(() => {
        if (isLoggedIn === false) {
            navigate("/")
        }
    })
    

    return (
        <>
        <div id="account_page">
            <div id='account_div'>
                <div id="profile_link_div"><Link id='profile_link' to="/profile">Profile</Link></div>
                <div id="account_deets_div">
                    <div id="account_title">
                        <h2>{user}'s</h2>
                        <h2>Account Details</h2>
                    </div>
                    <div id="username_div">
                        {user}<input></input><button className="account_buttons">Change</button>
                    </div>
                    <div id="password_div">
                        password<input></input><button className="account_buttons">Change</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default ProfileAccountDetailsPage