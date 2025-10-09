import type {User} from '../../models/User';
import './UserPage.css';

// interface UserPageProps {
//     user: User; // defining what the props are for the user component. 
// }

export const UserPage = () => {
    
    // props: UserPageProps
    //const user = props.user; // just a way to reference props more easily and make the code more readable. 

    return (
        <>
            <div className = "user-page">
                {/* <h1>{user.username}</h1>
                <div className = "user-profile-container">
                    <img src={user.imageUrl} alt={`${user.username}'s profile`} className="user-profile-image" />
                </div> */}
                
                <h1 className = "user-page-header">User Page</h1>
                <p>This is a user page prototype that includes information about the user.</p>

                <div className ="user-profile-container">
                    <h2 className="user-container-header">User</h2>
                    <input type="text" className = "user-input" id="username" name="username" placeholder='Username' />
                    <input type="email" className = "user-input" id="email" name="email" placeholder='Email' />
                    <input type="password" className = "user-input" id="password" name="password" placeholder='Password' />
                    <button className = "user-submit-button" type="submit">Update Profile</button>
                    {/* <button className = "user-submit-button"></button> */}
                </div>
            </div>
        </>
    );
}