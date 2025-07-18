import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          MyBlog
        </Link>
        <div className="d-flex gap-3">
          <Link className="nav-link" to="/create">
            Create Post
          </Link>
          <Link className="nav-link" to="/login">
            Login
          </Link>
          <Link className="btn btn-primary" to="/register">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
