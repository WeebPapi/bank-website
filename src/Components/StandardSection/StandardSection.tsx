import React, { CSSProperties, ReactNode } from "react"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./StandardSection.css"

interface StandardSectionProps {
  name?: string
  flexDirection: "row" | "column"
  firstSide?: ReactNode
  secondSide?: ReactNode
  style?: CSSProperties
  sectionHeight?: number
}

const StandardSection: React.FC<StandardSectionProps> = ({
  name,
  firstSide,
  secondSide,
  flexDirection,
  style,
  sectionHeight,
}) => {
  return (
    <section
      id={name ? name : ""}
      className={`container-md standard-section d-flex flex-${flexDirection} justify-content-start align-items-center `}
      style={style ? { ...style, minHeight: sectionHeight } : {}}
    >
      <div
        style={{
          width: flexDirection === "column" ? "100%" : "50%",
          height: flexDirection === "column" ? "50%" : "100%",
          minHeight: sectionHeight
            ? sectionHeight / 2
            : flexDirection === "column"
            ? 450
            : 700,
        }}
        className="first-side position-relative"
      >
        {firstSide ? firstSide : null}
      </div>
      <div
        style={{
          width: flexDirection === "column" ? "100%" : "50%",
          height: flexDirection === "column" ? "50%" : "100%",
          minHeight: sectionHeight
            ? sectionHeight / 2
            : flexDirection === "column"
            ? 450
            : 700,
        }}
        className="second-side position-relative"
      >
        {secondSide ? secondSide : null}
      </div>
    </section>
  )
}

export default StandardSection
