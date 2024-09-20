import React from "react"
import "./Footer.css"
import { logo } from "../../assets"
import { useWindowSize } from "../../hooks/useWindowSize"
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"

const Footer: React.FC = () => {
  const { width } = useWindowSize()
  return (
    <footer className="footer container-md">
      <div
        className={`footer-top d-flex flex-${
          width <= 768 ? "column" : "row"
        } justify-content-between align-items-start`}
      >
        <div className="footer-logo">
          <img src={logo} alt="hoobank-logo" />
          <p>A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div
          className={`footer-lists d-flex flex-row justify-content-between align-items-start`}
        >
          <div className="footer-list">
            <h3>Useful Links</h3>
            <ul>
              <li>
                <a href="#">Content</a>
              </li>
              <li>
                <a href="#">How It Works</a>
              </li>
              <li>
                <a href="#">Create</a>
              </li>
              <li>
                <a href="#">Explore</a>
              </li>
              <li>
                <a href="#">Terms & Services</a>
              </li>
            </ul>
          </div>
          <div className="footer-list">
            <h3>Community</h3>
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
              <li>
                <a href="#">Suggestions</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Newsletters</a>
              </li>
            </ul>
          </div>
          <div className="footer-list">
            <h3>Partner</h3>
            <ul>
              <li>
                <a href="#">Our Partner</a>
              </li>
              <li>
                <a href="#">Become A Partner</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom d-flex justify-content-between align-items-center">
        <p>Copyright © 2021 HooBank. All Rights Reserved.</p>
        <div className="footer-social-icons d-flex justify-content-between align-items-center">
          <a href="#">
            <FaInstagram fill="#fff" />
          </a>
          <a href="#">
            <FaFacebook fill="#fff" />
          </a>
          <a href="#">
            <FaTwitter fill="#fff" />
          </a>
          <a href="#">
            <FaLinkedin fill="#fff" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
