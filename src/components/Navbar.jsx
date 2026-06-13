import { NavLink } from "react-router-dom";
function Navbar() {
    return(
        <nav>
            <NavLink to="/">Home</NavLink>| {" "}
            <NavLink to="/About">About</NavLink>| {" "}
            <NavLink to="/Projects">Projects</NavLink>| {" "}
            <NavLink to="/Contact">Contact</NavLink>| {" "}
        </nav>
    )
}

export default Navbar;

