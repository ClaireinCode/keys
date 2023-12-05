

const Signup_LoginLandingPage = () => {
    const backgroundImage = {
        backgroundImage: 'url("src/assets/chicago2.jpeg")',
        backgroundSize: 'cover', // Adjust the background size as needed
        backgroundPosition: 'center center', // Adjust the background position as needed
        height: '100vh', // Set the height of the container to 100% of the viewport height
        margin: 0, // Remove default margin on body
        padding: 0, // Remove default padding on body
        display: 'flex',
        flexDirection: 'column',
    };

    return (
        <div style={backgroundImage}>
        <h1 style={{color: 'white'}}>Sign Up Log In</h1>
        </div>
    )
}
export default Signup_LoginLandingPage