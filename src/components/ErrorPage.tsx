import mario from "../assets/mario_sad.jpg";
export const ErrorPage = () => {
    return (
        <>
        <div className = "error-page">
            <h1>Error 404</h1>
            <h2>Page Not Found</h2>
            <img src={mario} alt="Sad Mario" />
            <p>Sorry, the page you are looking for does not exist.</p>

            <a href="/">Go back to Home</a>
        </div>
        </>
    )
}