import { useNavigate, Link } from 'react-router-dom'

const ProfileAccountDetailsPage = () => {

    const navigate = useNavigate()

    

    return (
        <>
        <div id='account_div'>
            <div id="profile_link_div"><Link id='profile_link' to="/profile">Profile</Link></div>
            <div id="account_deets_div">
                <div id="account_title">
                    <h2>Account Details</h2>
                </div>
                <div id="username_div">
                    username
                </div>
                <div id="password_div">
                    password
                </div>
            </div>
        </div>
        </>
    )
}
export default ProfileAccountDetailsPage