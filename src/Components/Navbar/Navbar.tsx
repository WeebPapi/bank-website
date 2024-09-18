import React, { useState } from "react"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { logo } from "../../assets"
import "./Navbar.css"
import { HiOutlineMenuAlt1 } from "react-icons/hi"
import { HiXMark } from "react-icons/hi2"

const Navbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const handleMenuToggle = () => {
    setToggleMenu((prev) => !prev)
  }

  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-md nav-container">
        <a className="navbar-brand">
          <img src={logo} alt="logo" />
        </a>
        <div className="navbar-nav  display-flex justify-content-between align-items-center desktop-menu">
          <a href="#" className="nav-link">
            <p>Home</p>
          </a>
          <a href="#about" className="nav-link">
            <p>About Us</p>
          </a>
          <a href="#features" className="nav-link">
            <p>Features</p>
          </a>
          <a href="#solution" className="nav-link">
            <p>Solution</p>
          </a>
        </div>
        <div className="nav-toggle d-none" onClick={handleMenuToggle}>
          {toggleMenu ? <HiXMark /> : <HiOutlineMenuAlt1 />}
        </div>
        {toggleMenu ? (
          <div className="mobile-menu-overlay d-none">
            <div className="navbar-nav mobile-menu d-flex flex-column justify-content-between align-items-center">
              <a href="#" className="nav-link">
                <p>Home</p>
              </a>
              <a href="#about" className="nav-link">
                <p>About Us</p>
              </a>
              <a href="#features" className="nav-link">
                <p>Features</p>
              </a>
              <a href="#solution" className="nav-link">
                <p>Solution</p>
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  )
}

export default Navbar
