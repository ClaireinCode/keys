import { Link } from "react-router-dom"


const ProfilePage = () => {

    return (
        <>
        <div id='profile_div'>
        <div id='menu_div'>
        <div id='profile_title'><h1>Profile</h1></div>
        <div id='profile_main_buttons'>
        <Link to="/your_houses"><button className="profile_buttons">Houses</button></Link>
        <Link to="/thoughts"><button className="profile_buttons">Thoughts</button></Link>
        <Link to="/account_details"><button className="profile_buttons">Account Details</button></Link>
        </div>
        </div>
        <div id='profile_hidden'>
        <Link to="/hidden_houses"><button className="profile_buttons">Hidden Housing</button></Link>
        </div>
        
        </div>
        </>
    )
}
export default ProfilePage