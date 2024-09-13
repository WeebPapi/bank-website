import React from "react"
import "./AboutBadge.css"

interface AboutBadgeProps {
  icon: string
  title: string
  desc: string
}

const AboutBadge: React.FC<AboutBadgeProps> = ({ icon, title, desc }) => {
  return (
    <div className="about-badge d-flex justify-content-between align-items-center">
      <div className="about-badge-icon">
        <img src={icon} alt="title" />
      </div>
      <div className="about-badge-text">
        <h3 className="about-badge-text-title">{title}</h3>
        <p className="about-badge-text-desc">{desc}</p>
      </div>
    </div>
  )
}

export default AboutBadge
