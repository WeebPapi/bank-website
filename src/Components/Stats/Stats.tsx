import React from "react"
import "./Stats.css"
import { statData } from "../../data"
import ColorReveal from "../ColorReveal/ColorReveal"

const Stats: React.FC = () => {
  return (
    <div className="stats d-flex justify-content-between align-items-center container-md ">
      {statData?.map((stat, index) => (
        <ColorReveal key={index + "stat"} style={{ width: "30%" }}>
          <div className="stat d-flex justify-content-between align-items-center">
            <p className="stat-body">{stat.stat}</p>
            <p className="text-gradient stat-caption">{stat.caption}</p>
            {index !== statData.length - 1 ? (
              <div className="division-bar"></div>
            ) : null}
          </div>
        </ColorReveal>
      ))}
    </div>
  )
}

export default Stats
