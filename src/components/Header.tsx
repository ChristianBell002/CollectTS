import { useNavigate } from 'react-router';

export const Header = () => {

    const navigate = useNavigate();
    const handleHome = () => {
        navigate('/');
    }
    
    return (
        <>
        <div className="header">
            <h1 className = "nav-title" onClick={handleHome}>ViewCollect</h1>
        </div>
        </>
    )
}