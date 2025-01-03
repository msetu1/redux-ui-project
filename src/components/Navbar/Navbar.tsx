import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center gap-3 text-xl font-bold my-5 mx-16">
      <h2>rfsaatu</h2>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/login">Login</Link>
      <div className="ml-auto">
        <ModeToggle/>
      </div>
    </div>
  );
};

export default Navbar;
