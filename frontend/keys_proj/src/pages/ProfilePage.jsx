import { Link } from "react-router-dom"


const ProfilePage = () => {

    return (
        <>
        <h1>Profile</h1>
        <Link to="housing/"><button>Houses</button></Link>
        <Link to="thoughts/"><button>Thoughts</button></Link>
        <Link to="account_details/"><button>Account Details</button></Link>
        <Link to="hidden_housing/"><button>Hidden Housing</button></Link>
        </>
    )
}
export default ProfilePage