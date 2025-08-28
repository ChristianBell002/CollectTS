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
            <div className = "left-header">
                <h1 className = "nav-title" onClick={handleHome}>ViewCollect</h1>
                <button className = "categories-button">My Categories</button>
            </div>
            <div className = "right-header">
                <button className = "header-button" onClick = {handleLogin}>Login</button>
                <button className = "header-button">Register</button>
            </div>
        </div>
        </>
    )
}