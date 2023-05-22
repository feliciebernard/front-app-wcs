import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <h1>To Do v2</h1>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/todolist">
        <button>To Do List</button>
      </Link>
      <Link to="/account">
        <button>Account</button>
      </Link>
    </div>
  );
}

export default Navbar;
