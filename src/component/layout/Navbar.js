import React from "react";
import { NavLink ,Link} from "react-router-dom";
 

const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg text-white   ">
      <NavLink className="navbar-brand" to="/">EmployeeData</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>

        </ul>

      </div>
      <Link type="button" className="btn btn-light mr-4" to="/Add">ADD DATA</Link>
    </nav>

  );
}
export default Navbar;