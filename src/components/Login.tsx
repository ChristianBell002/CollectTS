
export const Login = () => {

    return (
        <div className="login-container">
            <h2 className = "login-header">Login</h2>
            <div className = "login-div">
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className = "login-input" id="username" name="username" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className = "login-input" id="password" name="password" required />
                    </div>
                    <button className = "login-submit-button" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}