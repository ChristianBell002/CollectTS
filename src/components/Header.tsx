import { useNavigate } from 'react-router';

export const Header = () => {

    const navigate = useNavigate();
    const handleHome = () => {
        navigate('/');
    }
    const handleLogin = () => {
        navigate('/login');
    }
    
    return (
        <>
        <div className="header">
            <h1 className = "nav-title" onClick={handleHome}>ViewCollect</h1>
            <p className = "categories-button">My Categories</p>
            <p className = "login-button" onClick = {handleLogin}>Login</p>
            <p className = "signup-button">Register</p>
        </div>
        </>
    )
}