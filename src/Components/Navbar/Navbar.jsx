import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
   <nav className="navbar navbar-expand-lg  fw-bolder position-fixed top-0 left-0 right-0 w-100 z-3 py-4 px-5 ">
  <div className="container-fluid">
    <Link className="navbar-brand text-light" to={"/"}>START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav list-unstyled ms-auto">
        <li className="nav-item ">
          <NavLink className=" text-light mx-3 text-decoration-none"  to={"about"}>ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="text-light mx-3 text-decoration-none" to={"portfolio"}>PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="  text-light mx-3 text-decoration-none " to={"contact"}>CONTACT</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}
