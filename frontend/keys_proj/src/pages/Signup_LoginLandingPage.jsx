import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';


//Attribution: Key by Nikita Kozin from <a href="https://thenounproject.com/browse/icons/term/key/" target="_blank" title="Key Icons">Noun Project</a> (CC BY 3.0)

const Signup_LoginLandingPage = () => {
    const { isLoggedIn } = useOutletContext()
    const navigate = useNavigate()

    const backgroundImage = {
        backgroundImage: 'url("src/assets/chicago3.jpeg")',
        backgroundSize: 'cover', // Adjust the background size as needed
        backgroundPosition: 'center center', // Adjust the background position as needed
        height: '100vh', // Set the height of the container to 100% of the viewport height
        margin: 0, // Remove default margin on body
        padding: 0, // Remove default padding on body
        display: 'flex',
        flexDirection: 'column',
    };

    useEffect(() => {
        if (isLoggedIn === true) {
            navigate("/houses")
        }
    })

    return (
        <div style={backgroundImage} id='basediv_landing'>
            <div className="mb-2" id='landing'>
                <div className='landing_title_holder'>
                    <div className='landing_shield'></div>
                    <h1 className='landing_title'>Keys</h1>
                </div>
            <div>
                <Link to="signup">
                    <Button className='landing_button' variant="outline-light" size="lg">
                    Sign Up
                    </Button>{' '}
                </Link>
                <Link to="login">
                    <Button className='landing_button' variant="outline-light" size="lg">
                    Log In
                    </Button>
                </Link>
            </div>
            </div>
        </div>
    )
}
export default Signup_LoginLandingPage