import React from "react"
import "./CTA.css"
import StandardSection from "../StandardSection/StandardSection"
import { useWindowSize } from "../../hooks/useWindowSize"
import { GSButton } from "../"

const CTA: React.FC = () => {
  const { width } = useWindowSize()
  return (
    <>
      <StandardSection
        flexDirection={width <= 768 ? "column" : "row"}
        name="solution"
        sectionHeight={300}
        style={{
          background:
            "linear-gradient(144.39deg,#ffffff -278.56%,#6d6d6d -78.47%,#11101d 91.61%)",
          borderRadius: 20,
        }}
        firstSide={
          <>
            <h1>Lets try our service now!</h1>
            <p>
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </p>
          </>
        }
        secondSide={<GSButton />}
      />
    </>
  )
}

export default CTA
