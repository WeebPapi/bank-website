import React, { ReactNode } from "react"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./StandardSection.css"

interface StandardSectionProps {
  name?: string
  flexDirection: "row" | "column"
  firstSide?: ReactNode
  secondSide?: ReactNode
}

const StandardSection: React.FC<StandardSectionProps> = ({
  name,
  firstSide,
  secondSide,
  flexDirection,
}) => {
  return (
    <section
      id={name ? name : ""}
      className={`container-md standard-section d-flex flex-${flexDirection} justify-content-start align-items-center`}
    >
      <div className="first-side">{firstSide ? firstSide : null}</div>
      <div className="second-side">{secondSide ? secondSide : null}</div>
    </section>
  )
}

export default StandardSection
