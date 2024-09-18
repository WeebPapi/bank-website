import React from "react"
import "./Laurel.css"
import { brackets } from "../../assets"
import ColorReveal from "../ColorReveal/ColorReveal"

interface LaurelProps {
  text: string
  imgUrl: string
  name: string
  relation: string
}

const Laurel: React.FC<LaurelProps> = ({ text, imgUrl, name, relation }) => {
  return (
    <div className="laurel-card d-flex flex-column justify-content-center align-items-start">
      <img src={brackets} alt="brackets" />
      <p className="laurel-text">{text}</p>
      <div className="laurel-info d-flex">
        <img src={imgUrl} alt="profile-pic" />
        <div className="laurel-info-desc">
          <ColorReveal>
            <p className="laurel-name">{name}</p>
            <p className="laurel-relation">{relation}</p>
          </ColorReveal>
        </div>
      </div>
    </div>
  )
}

export default Laurel
