import { Link } from "react-router-dom";

function Error404() {
    return (
      <div>
        <h2>Error: 404</h2>
        <p>Page not found.</p>
        <Link to={"/"}> <img src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.png" alt="error 404"></img> </Link>
      </div>
    );
}
  
export default Error404;